import type { ChurchEvent } from "@/content/types";

function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

function stamp(date: string, time: string) {
  return `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;
}

/** Builds an iCalendar file. Multi-day events repeat daily at the same hours until `endDate`. */
export function buildIcs(event: ChurchEvent, opts: { title: string; description: string; location: string; url: string; timeZone: string }) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Golgotha SDA Church//Website//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}@golgotha-sda`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART;TZID=${opts.timeZone}:${stamp(event.date, event.start)}`,
    `DTEND;TZID=${opts.timeZone}:${stamp(event.date, event.end)}`,
    ...(event.endDate ? [`RRULE:FREQ=DAILY;UNTIL=${event.endDate.replace(/-/g, "")}T235959`] : []),
    `SUMMARY:${escapeText(opts.title)}`,
    `DESCRIPTION:${escapeText(`${opts.description}\n\n${opts.url}`)}`,
    `LOCATION:${escapeText(opts.location)}`,
    `URL:${opts.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}

export function downloadIcs(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}
