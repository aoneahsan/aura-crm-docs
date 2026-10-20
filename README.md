# AuraCRM Docs

**Last Updated:** 2026-10-20

The public documentation site for AuraCRM, a voice-first client operations app for independent
professionals. The current app release is pending; these docs describe the locally verified product.

- **Live docs:** <https://auracrm-docs.aoneahsan.com>
- **App host:** <https://auracrm.aoneahsan.com> (current release pending)

Built with Docusaurus. This repository contains public documentation; the product source remains in a
separate private repository.

<a id="run-locally"></a>
## 🧰 Run locally&nbsp;[#](#run-locally)

Use Node 24+ and Yarn 4.18.1 through Corepack.

```bash
corepack enable
yarn install --immutable
yarn start
```

<a id="build-and-verify"></a>
## ✅ Build and verify&nbsp;[#](#build-and-verify)

```bash
yarn gates
yarn serve
```

`yarn gates` runs TypeScript and the production Docusaurus build, including internal link validation.
Serve the generated `build/` directory and check a direct docs route on desktop and mobile before pushing.
Production builds omit source maps.

<a id="deploy"></a>
## 🚀 Deploy&nbsp;[#](#deploy)

Pushes to `main` build and deploy through [the Pages workflow](.github/workflows/deploy.yml). The custom
domain is stored in `static/CNAME`.

<a id="contribute"></a>
## 🤝 Contribute&nbsp;[#](#contribute)

External contributions use a reviewed pull request with a passing build. The owner works directly on
`main`. Read [CONTRIBUTING.md](CONTRIBUTING.md) before changing public content.

<a id="support"></a>
## 💬 Support&nbsp;[#](#support)

Use [the AuraCRM support page](https://aoneahsan.com/payment?project-id=auracrm&project-identifier=com.aoneahsan.auracrm)
or email **aoneahsan@gmail.com**.
