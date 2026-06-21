# CLAUDE.md — handoff for this repo

Portfolio site for **Muhammed Nasvih V** — Lead DevOps & Cloud Engineer. Read this before editing.

> ⚠️ **This repo is PUBLIC.** Never commit secrets, SSH keys, or confidential client/company brand names here. Working content with confidential names lives in `CONTENT.md`, which is **gitignored — keep it that way**.

## What this is

- **Single self-contained `index.html`** — HTML + CSS + a little vanilla JS. **No build step, no framework, no `package.json`.**
- `public/profile-photo.jpg` — hero portrait.
- `robots.txt` + `sitemap.xml` — SEO/crawl.
- `CONTENT.md` — local working notes (gitignored, confidential).

## Run / preview locally

```bash
python3 -m http.server 4174   # → http://localhost:4174
```

## Deploy

- Hosted on **Render as a Static Site**, live at **https://www.nasvih.tech** (`nasvih.tech` redirects to `www`).
- Render settings: **Build Command = empty** (it's static — do NOT let it run `npm install`/`npm run build`, that fails with no `package.json`), **Publish Directory = `.`**, Root Directory empty.
- **Auto-deploys on every push to `main`.**

## Push

```bash
GIT_SSH_COMMAND="ssh -i ~/.ssh/nasvih_github_ed25519 -o IdentitiesOnly=yes" git push nasvih main
```

Remote `nasvih` → `github.com:nasvih/portfolio2026`. (An older copy also exists at `jimbrutanv/portfolio` via a different key; `nasvih/portfolio2026` is the live one.)

## Design system (clone of the Simplexel landing page)

Blue primary `#2563eb` (deep `#1d3a8f`, soft `#eaf1ff`), font **Plus Jakarta Sans**.
- **Floating pill navbar** (fixed, rounded, backdrop-blur, scrolled shadow). Logo = gradient "NV" tile + "Nasvih Valliyattu" name (name shows on mobile too). Active section gets a pill bg + gradient underline, driven by scroll-position JS (with a bottom-of-page guard so the last/short **Contact** section still highlights).
- Centred **hero** with badge pill, gradient headline word (`.text-grad`), blur orbs, photo in a rounded card with floating chips.
- `section-alt` (#f6f8fc) alternating sections; **rounded cards with gradient icon tiles**; **gradient CTA panel** for contact.
- **Buttons are SOLID.** Only icon tiles / the headline word / the CTA panel use the gradient — match Simplexel exactly.

## Content rules (important)

- Frame everything **senior / DevOps-forward** — architecture, reliability, security, cost, multi-country scale. Do **not** list small ops metrics (e.g. domain counts).
- **Do NOT add "open to work / available / seeking" language.**
- Use only **real metrics** (60% faster deploys, 80+ users, 15+ projects, 100% client satisfaction). Don't invent stats.
- **Confidentiality (hard rule):** the employer **Code7 Information Technology** may be named (already public). **Code7's client brands must stay confidential** — describe client work by industry / as "confidential client", never by brand name. Likewise keep personal phone numbers out of this public repo.

## SEO

`index.html` `<head>` carries: keyword-rich title/description/keywords, canonical (`https://www.nasvih.tech/`), full Open Graph + Twitter Card (absolute image URLs), and JSON-LD `Person` schema. `robots.txt` points to `sitemap.xml`. After deploy, the site should be submitted to Google Search Console.
