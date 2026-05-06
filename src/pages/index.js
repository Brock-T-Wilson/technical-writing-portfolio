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
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1>Brock Wilson</h1>
          <p>Technical Writer | API Documentation | User Guides</p>

          <Link
            className="button button--primary button--lg"
            to="/docs/v19x-api"
          >
            View My Writing Samples
          </Link>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>About Me</h2>
          <p>
            I am an aspiring Technical Writer focused on creating clear, user-friendly documentation for both technical and non-technical audiences.
          </p>
          <p>
            I am currently building hands-on experience through API documentation, user guides, troubleshooting documentation, and accessibility-focused writing projects.
          </p>
          <p>
            My goal is to help users understand complex systems through simple, organized, and effective documentation while continuing to grow within the technical writing field.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>Featured Projects</h2>

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
              <h3>V19x API Documentation</h3>
              <p>
                API documentation focused on endpoints, requests, responses,
                and troubleshooting workflows.
              </p>
              <Link to="/docs/v19x-api">Read Project</Link>
              <Link to="/docs/v19x-api">Read Project</Link>

<br />

<a href="https://github.com/Brock-T-Wilson/V19x-Player-Account-API-Docs">
  View GitHub Repository
</a>
            </div>

            <div style={{
              border: '1px solid #444',
              padding: '1.5rem',
              borderRadius: '10px'
            }}>
              <h3>Xbox Player Data API</h3>
              <p>
                REST API documentation demonstrating authentication, player data
                retrieval, and response examples.
              </p>
              <Link to="/docs/xbox-api">Read Project</Link>
            </div>

            <div style={{
              border: '1px solid #444',
              padding: '1.5rem',
              borderRadius: '10px'
            }}>
              <h3>YouTube Sharing Guide</h3>
              <p>
                Step-by-step user guide explaining how to share YouTube videos
                using iPhone accessibility features.
              </p>
              <Link to="/docs/youtube-guide">Read Project</Link>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: '4rem' }}>
  <h2>Skills</h2>

  <ul>
    <li>API Documentation</li>
    <li>User Guides</li>
    <li>Markdown</li>
    <li>Git & GitHub</li>
    <li>REST APIs</li>
    <li>Information Architecture</li>
    <li>Accessibility Documentation</li>
    <li>Docusaurus</li>
  </ul>
</section>

        <section>
          <h2>Contact</h2>
          <p>
            GitHub: <a href="https://github.com/Brock-T-Wilson">Brock-T-Wilson</a>
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/bw-brockwilson19">Brock Wilson</a>
          </p>
          <p>
  Email: <a href="mailto:BrockWilson19@gmail.com">BrockWilson19@gmail.com</a>
</p>
        </section>
      </main>
    </Layout>
  )
}