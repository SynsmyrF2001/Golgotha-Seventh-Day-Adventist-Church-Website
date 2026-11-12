# Golgotha SDA Website — Collaboration Guide

Share this doc with anyone joining the project. It is the single source of truth for how we plan work (Linear), write code (GitHub), and ship (Vercel).

**Stack:** Next.js (static export) · TypeScript · Tailwind · next-intl (fr / ht / en)  
**Tools:** Linear (tasks) · GitHub (code) · Vercel (hosting + previews) · Cursor / VS Code (editor)

---

## 1. Roles & tools (who does what where)

| Tool | Purpose | Rule |
|---|---|---|
| **Linear** | What to do next (issues, priorities, cycles) | Every piece of work starts as a Linear issue |
| **GitHub** | Code, PRs, reviews | Never push straight to `main` |
| **Vercel** | Live site + PR preview URLs | Review the preview link before merging |
| **Chat** (WhatsApp / iMessage / Slack) | Quick questions | Decisions that affect the site → capture as a Linear issue |

Linear Free is enough for two people (unlimited members, 2 teams, 250 issues).

---

## 2. One-time setup (do this in order)

### A. You (workspace owner)

1. Create a **GitHub** repo and push the project (`main` as the production branch).
2. Invite your colleague as a GitHub collaborator (**Write** access).
3. Create a **Linear** workspace at [linear.app](https://linear.app) (Free plan).
4. Create **one team**, e.g. `Golgotha` with key `GOL`.
5. Invite your colleague: **Settings → Administration → Members → Invite**.
6. Connect **GitHub** in Linear: **Settings → Features → Integrations → GitHub**  
   - Install on the church website repo only.  
   - Enable PR → status automation (Opened → In Progress, Merged → Done).
7. Connect the repo to **Vercel**, set `NEXT_PUBLIC_SITE_URL`, deploy from `main`.
8. Create the starter Projects and labels below.
9. Seed the first backlog (10–20 issues) so there is always something clear to pick up.

### B. Colleague (join checklist)

- [ ] Accept the **Linear** invite and install the Linear desktop/mobile app (optional but useful).
- [ ] Accept the **GitHub** collaborator invite.
- [ ] Connect personal GitHub in Linear: **Settings → Connected accounts → GitHub**.
- [ ] Create a **Vercel** account linked to the same GitHub (needed for clean preview deploys).
- [ ] Install **Node 24** (see `.nvmrc` if present) via nvm or fnm.
- [ ] Clone the repo and run:

```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
nvm use          # or: fnm use
npm ci
npm run dev
```

- [ ] Open http://localhost:3000 and confirm fr / ht / en work.
- [ ] Make a tiny practice PR (typo or content tweak) linked to a Linear issue to learn the loop.

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
    → set Linear to In Review + paste Vercel preview
    → other person reviews
    → merge
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

Include the Linear issue id (`GOL-12`) in the branch name **and** the PR title so GitHub ↔ Linear linking works.

### PR title examples

- `GOL-12 Add visit page photo placeholders`
- `GOL-56 Update November Sabbath events`

### Before you open a PR

```bash
npm run lint
npm run build
```

This site uses `output: "export"`. If `build` fails locally, Vercel will fail too.

### PR description checklist

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

1. Build / lint  
2. Missing fr / ht / en strings  
3. Content accuracy (times, names, address)  
4. No secrets or `.env` files  
5. Preview looks right on phone width  

Aim for same-day review when possible.

---

## 6. Who owns which files (avoid collisions)

Talk before both editing the same area in one cycle.

| Area | Paths | Notes |
|---|---|---|
| Church content | `content/**` | Prefer one owner per cycle for events/sermons |
| UI chrome copy | `messages/fr.json`, `ht.json`, `en.json` | **Always update all three locales** |
| Components | `components/**` | Design-heavy work |
| Pages | `app/[locale]/**` | Feature owner |
| Site config | `content/site.ts`, `vercel.json`, `next.config.ts` | Discuss before changing |
| Images | `public/images/` | Compress before commit; clear file names |

**Hard rule:** do not remove `output: "export"` from `next.config.ts` without agreeing — it changes hosting behavior.

---

## 7. Weekly routine (keep this sacred)

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

## 8. Communication norms

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

## 9. Suggested starter backlog (create these in Linear)

Use these as the first issues so both of you have clear first tickets:

**Launch / setup**

1. Push repo to GitHub and protect `main` (PR required).  
2. Connect Vercel + set `NEXT_PUBLIC_SITE_URL`.  
3. Add custom domain (when purchased).  
4. Fill giving details in `content/site.ts` (Cash App / Zelle) when ready.  
5. Create Formspree forms and add IDs for contact / prayer / visit.  

**Content**

6. Confirm Sabbath schedule accuracy.  
7. Add real upcoming events.  
8. Add latest sermon entries + YouTube links.  
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

## 10. Definition of Done

An issue is Done only when:

1. Code is merged to `main`.  
2. Vercel production deploy succeeded.  
3. Acceptance criteria on the Linear issue are checked.  
4. Translations updated if UI copy changed.  
5. No known regressions on the pages you touched.

---

## 11. Quick reference commands

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
```

---

## 12. First week together (checklist)

| When | Owner | Action |
|---|---|---|
| Day 1 | You | GitHub repo live, Linear workspace + invite, Vercel connected |
| Day 1 | Colleague | Join Linear + GitHub, clone, `npm ci`, `npm run dev` |
| Day 1 | Both | Create labels, first Project, starter issues |
| Day 2 | Colleague | Practice PR (`GOL-xx`) |
| Day 2 | You | Review + merge practice PR |
| Day 2 | Both | 15-min planning: assign cycle 1 issues |
| Days 3–7 | Both | Build → PR → preview → review → merge |
| End of week | Both | Cycle review; plan next week |

---

Questions about process? Add a short note at the bottom of the related Linear issue or update this file in a `chore/` PR so both of you stay aligned.
