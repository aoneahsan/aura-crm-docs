# Contributing to AuraCRM Docs

Thanks for helping improve the AuraCRM documentation. This repository is the public source for
[auracrm-docs.aoneahsan.com](https://auracrm-docs.aoneahsan.com). Contributions are welcome under the
governance below.

## Governance — how `main` is protected

`main` is a protected branch:

- **Every change reaches `main` through a pull request** — no direct pushes, except by the repository
  owner (aoneahsan), who maintains the branch.
- **A PR needs at least one approving review** and a **green CI build** (the `Build` job in
  `.github/workflows/deploy.yml`) before it can be merged.
- **Force-pushes and branch deletion are blocked.**
- Even a collaborator with write access **cannot bypass review** — review is always required.

## How to become a contributor

You do not need any special access to contribute:

1. **Fork this repository, make your change on a branch, and open a pull request.** Anyone can do
   this. This is the recommended path for most contributions.
2. **Request collaborator (write) access** — open a
   [Contributor access request](https://github.com/aoneahsan/aura-crm-docs/issues/new?template=contributor-access-request.md)
   issue, or email the maintainer (below). Access is granted at the owner's discretion. **Write
   access still cannot push to `main`** — your changes go through a reviewed pull request like
   everyone else's.

## Running the site locally

This project uses **yarn** (Berry, via Corepack).

```bash
corepack enable          # once, if yarn 4 is not active
yarn install
yarn start               # local dev server
yarn build               # production build (this is also the link checker)
yarn serve               # preview the production build (needed to verify search)
```

## Writing docs

- Every page carries front matter with a `title` and a `description` (and `tags` where useful) — a
  page without them is invisible to search and ships an empty meta description.
- Keep content **brief, accurate, and honest**. Say what a feature does *and* does not do. Do not add
  hype ("best", "#1", "guaranteed") or claims the product cannot back up. For example, AuraCRM uses a
  **HIPAA-ready architecture** — never write "HIPAA-certified".
- When you add or move a page, update `sidebars.ts` in the **same change**. Never leave an orphaned
  page, and never leave a broken link — `yarn build` fails on broken internal links.
- Prefer relative links between docs.

## Coding standards

- TypeScript for config and components; keep it clean and typed.
- No secrets in the repository — this is a public repo.
- Match the existing formatting.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
docs: clarify how overage invoices are approved
feat: add a page on the admin audit log
fix: correct a broken link in getting-started
chore: bump docusaurus
```

## Support

To support AuraCRM, use **[aoneahsan.com/payment](https://aoneahsan.com/payment)** only. Please do
**not** add Open Collective, GitHub Sponsors, or any other donation link.

Questions? Open a [GitHub issue](https://github.com/aoneahsan/aura-crm-docs/issues) or email
**aoneahsan@gmail.com**.
