# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static multi-page personal/portfolio site for Allysha Bilges, hosted on GitHub Pages at `codingstormtrooper.github.io`.

## Local Preview

Run `npm start` to start the Eleventy dev server. Tailwind CSS is loaded via CDN (pinned to `https://cdn.tailwindcss.com/3.4.17`), so an internet connection is required for styling.

## Deploy

Push to `master` branch. GitHub Actions runs `npm run build` (Eleventy + Tailwind CSS) and deploys `_site/` to GitHub Pages.

## Architecture

- **Eleventy (v3)** — Nunjucks templates in `src/`, output to `_site/`
- **Tailwind v3 via CDN** — pinned to 3.4.17. Each page inherits an inline `tailwind.config` from the base layout (brand color `#7C3AED`, Inter font stack)
- **Light mode only** — no dark mode toggle or `dark:` variants
- **Multi-page routing** — each page lives in its own directory as `index.njk` (clean URLs: `/work/`, `/resume/`, etc.)
- **Shared base layout** — `src/_includes/base.njk` contains header nav, `<main>`, footer, and scripts. Changes to shared elements go here.
- **Responsive nav** — hamburger menu on mobile (`md:` breakpoint), horizontal links on desktop

## Pages

- `src/index.njk` — landing page with hero, skill cards, selected work links
- `src/work/index.njk` — professional case studies (anchored sections: `#salesforce-dashboards`, `#support-transformation`, `#ai-triage`, `#stevie-award`)
- `src/projects/index.njk` — personal projects and learning (anchored: `#proxmox`, `#pihole`, `#weather-app`)
- `src/resume/index.njk` — full resume with print stylesheet (`@media print` hides nav/footer, appends href to links)
- `src/about/index.njk` — short bio
- `src/contact/index.njk` — email and LinkedIn links

## Assets

- `src/assets/favicon.svg` — site favicon (cat silhouette with glasses)
- `src/assets/brand-logo.svg` — nav logo (cat + glasses + "AB" text)
- `src/assets/og.png` — Open Graph image for social sharing
- `src/assets/brand-logo.png` — legacy PNG logo (kept for reference)

## Key Conventions

- Brand color: `#7C3AED` (purple), defined as `brand` in Tailwind config
- All pages use max-width `max-w-6xl`, consistent padding `px-4 md:px-6 lg:px-8`
- Navigation links use absolute paths (`/work/`, `/resume/`, etc.)
- Footer year is auto-set via `document.getElementById('y').textContent=new Date().getFullYear()`
- Interactive elements have `transition-colors duration-200` and `focus:ring-2 focus:ring-purple-500` for accessibility
- Inter font loaded via Google Fonts CDN
- No external JS dependencies beyond the Tailwind CDN
