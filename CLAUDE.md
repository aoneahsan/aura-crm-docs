# AuraCRM public docs

**Updated:** 2026-10-13. This is the public `aoneahsan/aura-crm-docs` repository on `main`,
remote `origin`. Its sibling `../aura-crm/` is the private app repository; the parent
`../` is a separate private `project-root` repository. Search, commit and push from the owning
repository. Never copy app environment files, keys or unpublished private records here.

## Start here

The Docusaurus site lives at <https://auracrm-docs.aoneahsan.com/>. `static/CNAME` and
`docusaurus.config.ts` are the host authority. Main pushes run `.github/workflows/deploy.yml`
and publish GitHub Pages. Run the exact production build in a controlled desktop and mobile
browser, including a direct docs route, navigation and console check, before pushing a change.

| Work | Read |
|---|---|
| Local commands and repository workflow | `README.md`, then `CONTRIBUTING.md` |
| Site config and public navigation | `docusaurus.config.ts`, `sidebars.ts` |
| A specific product claim | The page in `docs/`, then the app's current source/records |
| Deployment | `.github/workflows/deploy.yml`, GitHub Pages run, live custom domain |

Use the manifest's Yarn 4.17.1 and `yarn install --immutable`, `yarn typecheck`, `yarn build`.
Do not state that the current app code is live: the app's production release is a separate gate
in `../aura-crm/docs/MANUAL-TASKS.md`. Public copy must use verified facts and the project's
approved voice; avoid invented feature, security, medical or compliance claims.

**Context coverage:** this entire docs repository, including `docs/`, `src/`, and `static/`.
The fleet tracker at `/home/ahsan/Documents/01-code/docs/tracking/fleet-maintenance-tracker.json`
records the maintenance run. Last optimized 2026-10-13; next routine context pass 2026-11-12.
