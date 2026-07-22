# AuraCRM Docs

The public documentation site for **AuraCRM** — an ambient, voice-first client operations engine for
premium independent professionals (coaches, consultants, therapists, concierge physicians, wealth
advisors). Talk after a session and AuraCRM drafts your CRM update, follow-up email, tasks, and
invoices for you to approve.

- **Live docs:** https://auracrm-docs.aoneahsan.com
- **The app:** https://auracrm.aoneahsan.com

Built with [Docusaurus](https://docusaurus.io/). This repository contains documentation only — the
product source lives in a separate, private repository.

## Run locally

This project uses **yarn** (Berry, via Corepack).

```bash
corepack enable      # once, if yarn 4 is not already active
yarn install
yarn start           # dev server with live reload
```

## Build

```bash
yarn build           # static output in ./build — also validates every internal link
yarn serve           # preview the production build (required to verify search)
```

Production builds ship without source maps by default.

## Deploying

Pushes to `main` build and deploy to GitHub Pages automatically via
`.github/workflows/deploy.yml`. The custom domain is set in `static/CNAME`
(`auracrm-docs.aoneahsan.com`).

## Contributing

`main` is protected — changes land through a reviewed pull request with a passing CI build. See
[CONTRIBUTING.md](./CONTRIBUTING.md).

## Support

To support AuraCRM: https://aoneahsan.com/payment · Questions: **aoneahsan@gmail.com**
