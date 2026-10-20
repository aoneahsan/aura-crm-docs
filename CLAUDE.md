# AuraCRM public docs

**Last Updated:** 2026-10-20

**Updated:** 2026-10-20. This is the public `aoneahsan/aura-crm-docs` repository on `main`,
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

Use Node 24+ and the manifest's Yarn 4.18.1. Run `yarn install --immutable` and `yarn gates`.
Do not state that the current app code is live: the app's production release is a separate gate
in `../aura-crm/docs/MANUAL-TASKS.md`. Public copy must use verified facts and the project's
approved voice; avoid invented feature, security, medical or compliance claims.

**Context coverage:** this entire docs repository, including `docs/`, `src/`, and `static/`.
The fleet tracker at `/home/ahsan/Documents/01-code/docs/tracking/fleet-maintenance-tracker.json`
records the maintenance run. Last optimized 2026-10-13; next routine context pass 2026-11-12.
Package and release maintenance completed 2026-10-20 and is next routinely eligible 2026-11-19.

## Current maintenance state

The 2026-10-20 pass updated every direct package to its current eligible release, moved the project to
Yarn 4.18.1 and Node 24+, satisfied the search plugin peers, and upgraded the Pages workflow to the current
action majors. Typecheck, production build, and desktop/mobile Chrome checks of
`/docs/getting-started` pass. The recursive audit is reduced to `braces@3.0.3`, for which no fixed release
exists, plus the `whatwg-encoding` deprecation inherited through the search indexer.

Patched transitive resolutions are temporary. `@swc/html` uses the first upstream fixed nightly because no
fixed stable release exists; replace it with the first stable fixed release when Docusaurus adopts one.
Remove each other override when its parent dependency adopts a safe release.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
