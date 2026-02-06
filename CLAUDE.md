# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static multi-page personal/portfolio site for Allysha Bilges, hosted on GitHub Pages at `codingstormtrooper.github.io`. No build step, no bundler, no package manager.

## Local Preview

Open any `index.html` directly in a browser. Tailwind CSS is loaded via CDN (`https://cdn.tailwindcss.com`), so an internet connection is required for styling.

## Deploy

Push to `master` branch with files at repo root. GitHub Pages auto-serves the site.

## Architecture

- **No build system** — plain HTML files, no templating engine or static site generator
- **Tailwind via CDN** — each page includes an inline `tailwind.config` script block with shared theme settings (brand color `#0EA5A4`, Inter font stack)
- **Multi-page routing** — each page lives in its own directory as `index.html` (clean URLs: `/work/`, `/resume/`, etc.)
- **Shared layout pattern** — header nav, `<main>`, footer, and year script are copy-pasted across all pages (no shared components/includes). Changes to nav or footer must be replicated in every page file.

## Pages

- `/index.html` — landing page with hero, skill cards, selected work links
- `/work/index.html` — project case studies (anchored sections: `#cycle-time`, `#pihole`, `#weather-app`)
- `/resume/index.html` — full resume with print stylesheet (`@media print` hides nav/footer, appends href to links)
- `/about/index.html` — short bio
- `/contact/index.html` — email and LinkedIn links

## Assets

- `/assets/favicon.svg` — site favicon
- `/assets/og.png` — Open Graph image for social sharing

## Key Conventions

- All pages use the same Tailwind config: brand color `#0EA5A4`, max-width `max-w-6xl`, consistent padding `px-4 md:px-6 lg:px-8`
- Navigation links use absolute paths (`/work/`, `/resume/`, etc.)
- Footer year is auto-set via `document.getElementById('y').textContent=new Date().getFullYear()`
- No external JS dependencies beyond the Tailwind CDN
