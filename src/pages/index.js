import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Brock Wilson"
      description="Technical Writing Portfolio"
    >
     <main style={{ padding: '4rem' }}>

  <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
    <h1>Brock Wilson</h1>
    <p>Technical Writer | API Docs | User Guides</p>

    <Link
      className="button button--primary button--lg"
      to="/docs/v19x-api"
    >
      View My Writing Samples
    </Link>
  </div>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  }}>

    <div style={{
      border: '1px solid #444',
      padding: '1.5rem',
      borderRadius: '10px'
    }}>
      <h2>V19x API Documentation</h2>
      <p>
        API documentation focused on endpoints, requests,
        responses, and troubleshooting workflows.
      </p>

      <Link to="/docs/v19x-api">
        Read Project
      </Link>
    </div>

    <div style={{
      border: '1px solid #444',
      padding: '1.5rem',
      borderRadius: '10px'
    }}>
      <h2>Xbox Player Data API</h2>
      <p>
        REST API documentation demonstrating authentication,
        player data retrieval, and response examples.
      </p>

      <Link to="/docs/xbox-api">
        Read Project
      </Link>
    </div>

    <div style={{
      border: '1px solid #444',
      padding: '1.5rem',
      borderRadius: '10px'
    }}>
      <h2>YouTube Sharing Guide</h2>
      <p>
        Step-by-step user guide explaining how to share
        YouTube videos using iPhone accessibility features.
      </p>

      <Link to="/docs/youtube-guide">
        Read Project
      </Link>
    </div>

  </div>

</main>
    </Layout>
  );
}