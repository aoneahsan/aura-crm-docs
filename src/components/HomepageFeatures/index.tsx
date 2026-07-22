import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Capture by voice',
    to: '/docs/features/capture',
    description: (
      <>
        Tap record after a session and speak a short update — or type a note. AuraCRM transcribes it
        and turns it into structured work.
      </>
    ),
  },
  {
    title: 'Proposals you approve',
    to: '/docs/features/ai-proposals',
    description: (
      <>
        One session becomes a stage change, a follow-up email, tasks, homework, and any overage
        invoice. Nothing is sent or charged without your click.
      </>
    ),
  },
  {
    title: 'Clients & tasks',
    to: '/docs/features/clients',
    description: (
      <>
        A clear engagement pipeline, an audited history, and a clean split between your professional
        tasks and each client&apos;s homework.
      </>
    ),
  },
  {
    title: 'Client portals',
    to: '/docs/features/client-portal',
    description: (
      <>
        Publish a private per-client progress portal with magic-link access and homework check-off —
        no account needed for the client.
      </>
    ),
  },
  {
    title: 'Plans & billing',
    to: '/docs/plans-and-limits',
    description: (
      <>
        Free, Starter, Professional, and Firm tiers with clear monthly AI-run caps. Billing is a
        direct bank transfer — no card processor.
      </>
    ),
  },
  {
    title: 'Security & privacy',
    to: '/docs/security-and-privacy',
    description: (
      <>
        Postgres with row-level security, PII redacted before the AI, HIPAA-ready architecture, and
        genuine account deletion.
      </>
    ),
  },
];

function Feature({ title, to, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard}>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.to} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
