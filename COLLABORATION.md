# Golgotha SDA Website — Collaboration Guide

Share this doc with anyone joining the project. It is the single source of truth for how we plan work (Linear), write code (GitHub), and ship (Vercel).

**Stack:** Next.js (static export) · TypeScript · Tailwind · next-intl (fr / ht / en)  
**Tools:** Linear (tasks) · GitHub (code) · Vercel (hosting + previews) · Cursor / VS Code (editor)  
**Repo visibility:** public (see [section 13](#13-the-repo-is-public--what-that-means))

---

## 1. Roles & tools (who does what where)

| Tool | Purpose | Rule |
|---|---|---|
| **Linear** | What to do next (issues, priorities, cycles) | Every piece of work starts as a Linear issue |
| **GitHub** | Code, PRs, reviews | Never push straight to `main` (enforced, see 2A) |
| **Vercel** | Live site + PR preview URLs | Review the preview link before merging |
| **Chat** (WhatsApp / iMessage / Slack) | Quick questions | Decisions that affect the site → capture as a Linear issue |

Linear Free is enough for two people (unlimited members, 2 teams, 250 issues).

---

## 2. One-time setup (do this in order)

### A. Owner

1. Create the **GitHub** repo (public) and push the project with `main` as the default and production branch.
2. Invite your colleague as a GitHub collaborator (**Write** access): repo → **Settings → Collaborators**.
3. **Protect `main`** (do this after the first push):  
   repo → **Settings → Rules → Rulesets → New branch ruleset**
   - Target: default branch (`main`)
   - ✅ Require a pull request before merging (1 approval is ideal; with only two people, at least require the PR)
   - ✅ Require status checks to pass → add **Lint & build** (appears after the first PR runs CI, see section 5)
   - ✅ Block force pushes
   - ✅ Restrict deletions
4. Create a **Linear** workspace at [linear.app](https://linear.app) (Free plan).
5. Create **one team**, e.g. `Golgotha` with key `GOL`.
6. Invite your colleague: **Settings → Administration → Members → Invite**.
7. Connect **GitHub** in Linear: **Settings → Features → Integrations → GitHub**  
   - Install on the church website repo only.  
   - Enable PR → status automation (Opened → In Progress, Merged → Done).
8. Connect the repo to **Vercel**, set `NEXT_PUBLIC_SITE_URL` (Project → Settings → Environment Variables), deploy from `main`.  
   If Vercel blocks or asks for authorization on a preview from your colleague's commits, approve it in the Vercel dashboard (or add them as a team member).
9. Create the starter Projects and labels below.
10. Seed the first backlog (10–20 issues) so there is always something clear to pick up.
11. Decide who holds which accounts (see [section 14](#14-accounts--secrets)).

### B. Colleague (join checklist)

- [ ] Accept the **Linear** invite and install the Linear desktop/mobile app (optional but useful).
- [ ] Accept the **GitHub** collaborator invite.
- [ ] Connect personal GitHub in Linear: **Settings → Connected accounts → GitHub**.
- [ ] Create a **Vercel** account linked to the same GitHub (needed for clean preview deploys).
- [ ] Install **Node 24** via nvm or fnm. The repo's `.nvmrc` pins it, so `nvm use` / `fnm use` picks the right version.
- [ ] Set your git identity (see [section 13](#13-the-repo-is-public--what-that-means) — your commit email is public).
- [ ] Clone the repo and run:

```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
nvm use          # or: fnm use
npm ci
npm run dev
```

- [ ] Open http://localhost:3000 and confirm fr / ht / en work.
- [ ] Read [section 6](#6-project-map--how-to-make-common-changes) (project map) and [section 12](#12-read-this-before-coding-nextjs-gotchas).
- [ ] Make a tiny practice PR (typo or content tweak) linked to a Linear issue to learn the loop.

### Local environment variables

You do **not** need any env vars to run the site locally. `NEXT_PUBLIC_SITE_URL` falls back to `https://golgotha-sda.vercel.app` (see `content/site.ts`). It only matters in production (canonical URLs, sitemap, Open Graph). If you ever want to test with a different URL, create `.env.local` (gitignored, never committed):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 3. Linear workspace layout

### Team

One team only: **Golgotha (`GOL`)**.  
Do not create a second team unless content and engineering truly split later.

### Statuses (keep the defaults)

| Status | Meaning |
|---|---|
| **Triage** (optional) | New idea / bug — not accepted yet |
| **Backlog** | Agreed work, not started |
| **Todo** | Picked for the current cycle |
| **In Progress** | Someone is actively working it |
| **In Review** | PR open; waiting on the other person |
| **Done** | Merged to `main` |
| **Canceled** | Won’t do |

PR automation should move issues **In Progress** when a PR opens and **Done** when it merges. Set **In Review** manually when you request a review.

### Labels (create these)

| Label | Use |
|---|---|
| `content` | Events, sermons, ministries, site copy in `content/` |
| `design` | Layout, visuals, motion, CSS |
| `i18n` | Translations in `messages/fr.json`, `ht.json`, `en.json` |
| `bug` | Something broken |
| `chore` | Tooling, deps, config, docs |
| `blocked` | Waiting on photos, church info, Formspree, domain, etc. |

Priority: use Linear’s built-in **Urgent / High / Medium / Low**. Default to Medium.

### Projects (optional containers)

Create Projects for larger themes, not every task:

| Project | Examples |
|---|---|
| **Launch readiness** | Domain, SEO, contact forms, giving links, photos |
| **Content pipeline** | Recurring events / sermons updates |
| **Design polish** | Hero, mobile nav, accessibility pass |

For day-to-day work, **Issues alone are enough**. Convert an issue into a Project only if it grows past ~1 week.

### Cycles (our sprint rhythm)

- Cycle length: **1 week** (Sun–Sat or Mon–Sun — pick one and stick to it).
- Capacity: **3–6 issues per person** (prefer small issues).
- At cycle start: move chosen backlog items into the cycle and assign owners.
- At cycle end: unfinished work rolls to the next cycle; don’t silently abandon it.

---

## 4. How we write Linear issues

**Title:** clear and actionable  
Good: `Add November events to events page`  
Bad: `Events` / `Fix stuff`

**Description template** (copy into each issue):

```markdown
## Goal
What should be true when this is done?

## Scope
- Files / pages likely touched (if known)
- Out of scope

## Acceptance criteria
- [ ] …
- [ ] fr / ht / en updated if UI copy changed
- [ ] `npm run lint` and `npm run build` pass

## Notes / links
Screenshots, church source material, Figma, etc.
```

**Sizing tip:** if an issue will take more than one focused evening, split it into sub-issues.

**Assignee:** always one person. Unassigned = not owned.

---

## 5. The development loop (every task)

```text
Linear issue claimed
    → branch from main
    → code locally
    → lint + build
    → push + open PR (mention GOL-123)
    → CI passes + set Linear to In Review + paste Vercel preview
    → other person reviews
    → squash-merge
    → Linear → Done (auto if GitHub linked)
    → pull main locally
```

### Branch naming

```text
feat/GOL-12-visit-page-photos
fix/GOL-34-mobile-menu
content/GOL-56-november-events
chore/GOL-78-add-nvmrc
```

Include the Linear issue id (`GOL-12`) in the branch name **and** the PR title so GitHub ↔ Linear linking works. Linear's “Copy git branch name” shortcut (Cmd/Ctrl+Shift+.) generates a valid name.

### PR title examples

- `GOL-12 Add visit page photo placeholders`
- `GOL-56 Update November Sabbath events`

### Before you open a PR

```bash
npm run lint
npm run build
```

This site uses `output: "export"`. If `build` fails locally, Vercel will fail too. A GitHub Action (`.github/workflows/ci.yml`) runs the same two commands on every PR, so a red ✗ on the PR means fix it before asking for review.

### PR description

Opening a PR pre-fills the description from `.github/pull_request_template.md`. Fill it in; the checklist is:

```markdown
## Linear
Closes GOL-12

## What
-

## Test plan
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Checked fr / ht / en (if copy changed)
- [ ] Mobile + desktop OK on touched pages
- [ ] Vercel preview reviewed: <link>
```

### Review bar (keep it light)

Review for:

1. Build / lint (CI green)  
2. Missing fr / ht / en strings  
3. Content accuracy (times, names, address)  
4. No secrets or `.env` files  
5. Preview looks right on phone width  

Aim for same-day review when possible.

### Merging

- **Squash and merge** is the default: one PR = one commit on `main`, with the PR title (including `GOL-xx`) as the commit message.
- Delete the branch after merging (GitHub offers a button).
- The author merges their own PR **after** the other person approves.

### Keeping your branch up to date

If `main` moved while you worked:

```bash
git fetch origin
git rebase origin/main        # or: git merge origin/main if you prefer
# fix any conflicts, then:
git add <fixed files>
git rebase --continue
git push --force-with-lease   # only on YOUR OWN feature branch, never on main
```

Conflicts are most likely in `messages/*.json` and `content/*.ts`. Keep **both** sides' additions, then run `npm run build` to make sure the JSON/TS is still valid. If a conflict feels risky, stop and ask in chat before resolving.

---

## 6. Project map & how to make common changes

```text
app/[locale]/**      Pages (fr / ht / en routes). app/(root)/ redirects "/" to a locale.
components/layout/   Header, footer, menu, language toggle
components/sections/ Page sections (hero, events list, service times, …)
components/ui/       Small reusable pieces (buttons, cards, forms, accordion)
content/             Church data: events, sermons, ministries, beliefs, site info
messages/            UI strings: fr.json, ht.json, en.json
i18n/                next-intl routing + request config
lib/                 Helpers (dates, Bible refs, class names)
public/images/       Static images
```

### Add or edit an event — `content/events.ts`

Add an object to the `events` array. Every text field needs **all three** languages:

```ts
{
  id: "christmas-program-2026",          // unique, kebab-case
  title: { fr: "…", ht: "…", en: "Christmas Program" },
  description: { fr: "…", ht: "…", en: "…" },
  date: "2026-12-19",                    // YYYY-MM-DD
  endDate: "2026-12-20",                 // optional, multi-day events
  start: "17:00",                        // 24h
  end: "19:00",
  ministry: "pathfinders",               // optional; must match a slug in ministries.ts
  featured: true,                        // optional; shows up in featured spots
}
```

Past events move to the “Past” tab automatically. Sample data is marked `SAMPLE DATA` at the top of the file: replace it with real data when the church confirms it.

### Add a sermon — `content/sermons.ts`

Same pattern: `id`, `title` (3 langs), `speaker`, `date`, optional `series` (3 langs), `passage`, `summary` (3 langs), and `youtubeId` (the part after `v=` in the YouTube URL; leave `""` until the recording is online).

### Change site-wide info — `content/site.ts`

Address, phone, email, social links, giving links, Formspree IDs. **Discuss before changing** (see section 7). A link left as `""` is hidden on the site until it's filled in.

### Change UI text — `messages/*.json`

Add or edit the key in **all three** files (`fr.json`, `ht.json`, `en.json`) with the **same key path**. If a key exists in only one locale, the other locales will show a raw key or log an error. After editing, open the page in all three languages (`/fr`, `/ht`, `/en`).

Content in `content/*.ts` uses the `Localized` type, so TypeScript will fail the build if you forget a language there. `messages/*.json` has no such safety net, so double-check it yourself.

### Add images — `public/images/`

- Compress before committing (aim for < 300 KB per photo; resize to the widest size it is displayed at, usually ≤ 1920 px).
- Prefer WebP or optimized JPEG. Use lowercase kebab-case file names, e.g. `sabbath-service-2026.webp`.
- Only commit photos the church has approved for public use (see section 13), and people's faces need consent.
- `next.config.ts` sets `images: { unoptimized: true }` because of static export, so Next won't resize them for you.

---

## 7. Who owns which files (avoid collisions)

Talk before both editing the same area in one cycle.

| Area | Paths | Notes |
|---|---|---|
| Church content | `content/**` | Prefer one owner per cycle for events/sermons |
| UI chrome copy | `messages/fr.json`, `ht.json`, `en.json` | **Always update all three locales** |
| Components | `components/**` | Design-heavy work |
| Pages | `app/[locale]/**` | Feature owner |
| Site config | `content/site.ts`, `vercel.json`, `next.config.ts` | Discuss before changing |
| Images | `public/images/` | Compress before commit; clear file names |
| Process / CI | `COLLABORATION.md`, `.github/**` | Change via a `chore/` PR |

**Hard rule:** do not remove `output: "export"` from `next.config.ts` without agreeing — it changes hosting behavior.

---

## 8. Weekly routine (keep this sacred)

### Sunday or Monday — Plan (15–20 min, together or async)

1. Close or roll last cycle’s leftovers in Linear.  
2. Pull church needs (events, announcements, photos).  
3. Pick **3–6 issues each** for the new cycle.  
4. Assign owners and set priorities.  
5. Call out anything `blocked` (waiting on pastor/secretary/photos).

### Mid-week — Build

- Work your assigned issues only (or swap explicitly in Linear).  
- Open PRs early — small PRs beat perfect PRs.  
- Paste the Vercel preview into the Linear issue / PR.  
- If stuck >30 minutes, comment on the Linear issue and ping chat.

### Friday or Saturday — Ship & review (15 min)

1. Review open PRs; merge what’s ready.  
2. Confirm production looks correct after merges.  
3. Mark cycle issues Done / move leftovers.  
4. Note content that must go live before Sabbath if relevant.

### Async daily habit (5 min)

- Check Linear **Inbox** / My issues.  
- Pull `main` before starting new work.  
- Don’t leave PRs idle more than ~48 hours without a comment.

---

## 9. Communication norms

| Situation | Do this |
|---|---|
| Quick question | Chat |
| New idea or bug | Linear issue (label it) |
| Design feedback | Comment on PR + Vercel preview |
| Content from church leadership | Create `content` issue; attach source |
| Blocking dependency | Label `blocked` + comment who/what you’re waiting on |
| Emergency production break | Fix on a `fix/` branch, PR ASAP, notify in chat |

Be explicit in Linear comments: “Taking this”, “Blocked on Cash App cashtag”, “Ready for review”.

---

## 10. Suggested starter backlog (create these in Linear)

Use these as the first issues so both of you have clear first tickets:

**Launch / setup**

1. Push repo to GitHub and protect `main` (PR required, CI required).  
2. Connect Vercel + set `NEXT_PUBLIC_SITE_URL`.  
3. Add custom domain (when purchased).  
4. Fill giving details in `content/site.ts` (Cash App / Zelle) when ready.  
5. Create Formspree forms and add IDs for contact / prayer / visit.  

**Content**

6. Confirm Sabbath schedule accuracy.  
7. Replace sample events with real upcoming events.  
8. Replace sample sermons with latest entries + YouTube links.  
9. Fill ministry pages with approved copy.  
10. Add social links when accounts exist.  

**Design / polish**

11. Replace photo placeholders with real church photos.  
12. Mobile pass on Home, Visit, Give, Contact.  
13. Open Graph / social share image check.  

**Process**

14. Colleague practice PR linked to a Linear issue.  
15. Write/refresh this collaboration doc as needed.

---

## 11. Definition of Done

An issue is Done only when:

1. Code is merged to `main`.  
2. Vercel production deploy succeeded.  
3. Acceptance criteria on the Linear issue are checked.  
4. Translations updated if UI copy changed.  
5. No known regressions on the pages you touched.

---

## 12. Read this before coding (Next.js gotchas)

- **This is not the Next.js you may remember.** The project's `AGENTS.md` warns that this version has breaking changes (APIs, conventions, file structure). Before writing framework code, read the relevant guide in `node_modules/next/dist/docs/`. This applies to AI coding tools too: they should read `AGENTS.md` first.
- **Static export only.** `output: "export"` means the site is plain HTML/CSS/JS. There are **no API routes, no server actions, no middleware-based logic, no runtime server code**. Forms go through Formspree instead (`components/ui/SmartForm.tsx`).
- **All routes are pre-rendered** per locale (`fr`, `ht`, `en`). New pages go under `app/[locale]/` and need `generateStaticParams` where they have dynamic segments (see `ministries/[slug]/page.tsx`).
- **Trailing slashes** are on (`trailingSlash: true`), so internal links resolve as `/en/visit/`. Use the helpers from `i18n/navigation.ts` rather than raw `<a>` tags for internal links.
- **Dev server is Turbopack.** Restart `npm run dev` if you change `next.config.ts` or add a new `messages` file.

### Troubleshooting

| Symptom | Likely fix |
|---|---|
| `nvm use` says no `.nvmrc` / wrong Node | `git pull`, then `nvm install` (reads `.nvmrc`), then `nvm use` |
| `npm ci` fails or complains about lockfile | Wrong Node version, or someone changed `package.json` without updating `package-lock.json`. Use Node 24, then ask. |
| Works locally, fails on Vercel / CI | Run `npm ci && npm run build` (not just `npm run dev`). A missing locale string in a `content/*.ts` file or a type error shows up only at build time. |
| Page shows a raw key like `home.hero.title` | That key is missing in the current locale's `messages/*.json` |
| Weird stale behavior in dev | Stop the dev server, delete `.next/`, start again |
| Merge conflict in `messages/*.json` | Keep both sides' keys, verify valid JSON, run `npm run build` |

---

## 13. The repo is public — what that means

Anyone on the internet can read the code and the **full git history**. That is fine for this project, but follow these rules:

- **Never commit secrets.** No `.env*` files, API keys, passwords, or tokens. `.env*` is gitignored; keep it that way. If a secret is ever committed, **rotate it immediately** (deleting the commit does not un-leak it) and tell the other person.
- **Formspree form IDs and the giving info (Cash App / Zelle / giving URL) are fine to commit**: they are shown on the public site anyway. Don't commit anything that is *not* already public (members' private phone numbers, emails, addresses, prayer requests, or any member data).
- **Photos:** only commit images the church has approved for public use. Get consent for identifiable people, especially children.
- **Your commit email is public.** To avoid exposing your personal address, use GitHub's no-reply address:
  1. GitHub → **Settings → Emails** → check *Keep my email addresses private* (and optionally *Block command line pushes that expose my email*). Note the `ID+username@users.noreply.github.com` address shown.
  2. Set it locally: `git config user.email "ID+username@users.noreply.github.com"` (add `--global` to apply to all repos).
- **Pull requests from strangers:** only people you invite as collaborators can push branches. If someone outside opens a PR from a fork, treat it like any other PR: nothing merges without review.
- Because `main` is protected (section 2A), nobody can push to it directly, even by accident.

---

## 14. Accounts & secrets

Decide this at the start and write it down here (edit this table in a `chore/` PR):

| Account | Owner | Who else has access | Notes |
|---|---|---|---|
| GitHub repo | _owner_ | _colleague (Write)_ | |
| Linear workspace | _owner_ | _colleague (Member)_ | |
| Vercel project | _owner_ | _colleague (if needed for previews)_ | |
| Formspree | _TBD_ | | Form IDs live in `content/site.ts` |
| Domain registrar | _TBD_ | | |
| YouTube / social | _church / TBD_ | | |

Share credentials through a password manager's shared vault, **never** in chat, email, Linear, or git. Where possible, give people their own account with permissions instead of sharing a login.

---

## 15. Quick reference commands

```bash
# Start work
git checkout main && git pull
git checkout -b feat/GOL-12-short-description

# Quality gate
npm run lint
npm run build

# Ship
git push -u origin HEAD
# then open PR on GitHub, title starts with GOL-12

# After merge
git checkout main && git pull
git branch -d feat/GOL-12-short-description
```

---

## 16. First week together (checklist)

| When | Owner | Action |
|---|---|---|
| Day 1 | You | GitHub repo live + `main` protected, Linear workspace + invite, Vercel connected |
| Day 1 | Colleague | Join Linear + GitHub, clone, `npm ci`, `npm run dev` |
| Day 1 | Both | Create labels, first Project, starter issues, fill in section 14 |
| Day 2 | Colleague | Practice PR (`GOL-xx`) |
| Day 2 | You | Review + merge practice PR |
| Day 2 | Both | 15-min planning: assign cycle 1 issues |
| Days 3–7 | Both | Build → PR → preview → review → merge |
| End of week | Both | Cycle review; plan next week |

---

Questions about process? Add a short note at the bottom of the related Linear issue or update this file in a `chore/` PR so both of you stay aligned.
