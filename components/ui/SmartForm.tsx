"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Mail } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export type FieldDef = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select" | "checkbox";
  required?: boolean;
  options?: { value: string; label: string }[];
  help?: string;
  half?: boolean;
};

type Status = "idle" | "sending" | "success" | "mailto" | "error";

/**
 * Sends to Formspree when `formId` is set; otherwise opens the visitor's email app
 * with the message pre-filled and addressed to the church secretary.
 */
export function SmartForm({
  fields,
  formId,
  subject,
  tone = "light",
}: {
  fields: FieldDef[];
  formId: string;
  subject: string;
  tone?: "light" | "dark";
}) {
  const t = useTranslations("forms");
  const [status, setStatus] = useState<Status>("idle");
  const baseId = useId();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;

    if (!formId) {
      const body = fields
        .map((f) => {
          const value = f.type === "checkbox" ? (data.get(f.name) ? "✓" : "—") : String(data.get(f.name) ?? "");
          return `${f.label}: ${value}`;
        })
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      data.append("_subject", subject);
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const dark = tone === "dark";
  const inputClass = cn(
    "w-full rounded-none border px-4 py-3.5 text-base transition-colors outline-none focus:ring-2",
    dark
      ? "border-paper/20 bg-paper/5 text-paper placeholder:text-paper/40 focus:border-gold focus:ring-gold/30"
      : "border-onyx/15 bg-card text-ink placeholder:text-ink/40 focus:border-onyx focus:ring-onyx/15",
  );

  if (status === "success") {
    return (
      <div role="status" className={cn("flex flex-col items-start gap-4 rounded-3xl p-8", dark ? "bg-paper/10" : "bg-card")}>
        <CheckCircle2 className="size-10 text-gold" aria-hidden />
        <p className="text-lg font-semibold">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {fields.map((f) => {
        const id = `${baseId}-${f.name}`;
        const helpId = f.help ? `${id}-help` : undefined;
        const label = (
          <span className="mb-2 block text-sm font-semibold">
            {f.label}
            {!f.required && <span className={cn("ml-1 font-normal", dark ? "text-paper/50" : "text-ink/65")}>({t("optional")})</span>}
          </span>
        );

        if (f.type === "checkbox") {
          return (
            <div key={f.name} className="sm:col-span-2">
              <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
                <input id={id} name={f.name} type="checkbox" aria-describedby={helpId} className="mt-1 size-5 accent-maroon" />
                <span>
                  <span className="font-semibold">{f.label}</span>
                  {f.help && (
                    <span id={helpId} className={cn("mt-1 block text-sm", dark ? "text-paper/60" : "text-ink/72")}>
                      {f.help}
                    </span>
                  )}
                </span>
              </label>
            </div>
          );
        }

        return (
          <label key={f.name} htmlFor={id} className={cn("block", !f.half && "sm:col-span-2")}>
            {label}
            {f.type === "textarea" ? (
              <textarea id={id} name={f.name} required={f.required} rows={5} aria-describedby={helpId} className={inputClass} />
            ) : f.type === "select" ? (
              <select id={id} name={f.name} required={f.required} className={inputClass}>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.label}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type}
                required={f.required}
                min={f.type === "number" ? 1 : undefined}
                autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : f.name === "name" ? "name" : undefined}
                aria-describedby={helpId}
                className={inputClass}
              />
            )}
            {f.help && (
              <span id={helpId} className={cn("mt-1.5 block text-sm", dark ? "text-paper/60" : "text-ink/72")}>
                {f.help}
              </span>
            )}
          </label>
        );
      })}

      <div className="flex flex-col gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 self-start rounded-none bg-maroon px-7 py-4 font-semibold lowercase text-paper transition-colors hover:bg-maroon-dark disabled:opacity-60"
        >
          {!formId && <Mail className="size-4" aria-hidden />}[ {status === "sending" ? t("sending") : t("submit")} ]
        </button>
        <p aria-live="polite" className={cn("text-sm", dark ? "text-paper/70" : "text-ink/70")}>
          {status === "mailto" && t("mailtoNote")}
          {status === "error" && <span className="text-maroon">{t("error")}</span>}
        </p>
      </div>
    </form>
  );
}
