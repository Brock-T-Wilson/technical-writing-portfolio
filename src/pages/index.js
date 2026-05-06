import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Brock Wilson"
      description="Technical Writing Portfolio">

      <main
        style={{
          textAlign: 'center',
          padding: '4rem',
        }}>

        <h1>Brock Wilson</h1>

        <p>
          Technical Writer | API Docs | User Guides
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs/v19x-api">

          View My Writing Samples

        </Link>

      </main>
    </Layout>
  );
}