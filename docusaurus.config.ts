import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AuraCRM Docs',
  tagline: 'Your back office, run by your voice.',
  favicon: 'img/favicon.svg',

  // Improve compatibility with the upcoming Docusaurus v4
  future: {
    v4: true,
    faster: true,
    // Do not read git history for last-update dates. Keeps the build deterministic
    // and independent of clone depth / commit state; the sitemap uses the build date.
    experimental_vcs: 'disabled',
  },

  url: 'https://auracrm-docs.aoneahsan.com',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub Pages deployment config.
  organizationName: 'aoneahsan',
  projectName: 'aura-crm-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/aoneahsan/aura-crm-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      // Offline/local full-text search for the public docs site.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/aura-social-card.png',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for AuraCRM — the ambient, voice-first client operations engine for premium independent professionals.',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AuraCRM Docs',
      logo: {
        alt: 'AuraCRM logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/docs/getting-started', label: 'Get started', position: 'left' },
        { to: '/docs/changelog', label: 'Changelog', position: 'left' },
        {
          href: 'https://auracrm.aoneahsan.com',
          label: 'Open the app',
          position: 'right',
        },
        {
          href: 'https://github.com/aoneahsan/aura-crm-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Getting started', to: '/docs/getting-started' },
            { label: 'Plans & limits', to: '/docs/plans-and-limits' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Features',
          items: [
            { label: 'Capture', to: '/docs/features/capture' },
            { label: 'AI proposals', to: '/docs/features/ai-proposals' },
            { label: 'Client portal', to: '/docs/features/client-portal' },
            { label: 'Security & privacy', to: '/docs/security-and-privacy' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Open the app', href: 'https://auracrm.aoneahsan.com' },
            {
              label: 'Support',
              href: 'https://aoneahsan.com/payment?project-id=auracrm&project-identifier=com.aoneahsan.auracrm',
            },
            { label: 'GitHub', href: 'https://github.com/aoneahsan/aura-crm-docs' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} AuraCRM team. Built with care using Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
