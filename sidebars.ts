import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Explicit, curated sidebar for the AuraCRM docs. Keep this in sync in the
 * SAME change as any added/removed page — an orphaned page is one nobody finds.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        title: 'Features',
        description: 'What AuraCRM does, feature by feature.',
      },
      items: [
        'features/capture',
        'features/ai-proposals',
        'features/clients',
        'features/tasks',
        'features/invoices',
        'features/client-portal',
        'features/admin',
      ],
    },
    'plans-and-limits',
    'security-and-privacy',
    'faq',
    'changelog',
  ],
};

export default sidebars;
