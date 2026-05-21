import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'OpsFlow SaaS Documentation Portal',
    image: require('@site/static/img/opsflow-preview.png').default,
    link: '/docs/opsflow/opsflow-overview',
    description: (
      <>
        A software documentation portal for a fictional operations management platform featuring user guides, admin workflows, troubleshooting, release notes, and an API quickstart.
      </>
    ),
  },
  {
    title: 'Xbox Player Data API Documentation',
    image: require('@site/static/img/xbox-api-preview.png').default,
    link: '/docs/xbox-player-data-api/overview',
    description: (
      <>
        REST API documentation with endpoints, request and response examples, error handling, and troubleshooting guidance.
      </>
    ),
  },
  {
    title: 'V19x API Documentation',
    image: require('@site/static/img/v19x-api-preview.png').default,
    link: '/docs/v19x-api/overview',
    description: (
      <>
        Security-focused API documentation covering authentication, MFA workflows, session management, and structured error responses.
      </>
    ),
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center">
          <img className={styles.featureSvg} src={image} alt={`${title} preview`} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
