import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function Home() {
  const logoUrl = useBaseUrl('logo.png');
  const profileUrl = useBaseUrl('profile.png');
  return (
    <Layout
      title="Brock Wilson"
      description="Technical Writing Portfolio"
    >
      <main style={{ padding: '4rem' }}>
<section className="hero-section">
  <div className="hero-content">
    <img
  src={logoUrl}
  alt="BW Logo"
  className="hero-logo"
/>

    <div className="hero-text">
      <img
        src={profileUrl}
        alt="Brock Wilson"
        className="profile-image"
      />

      <h1>Brock Wilson</h1>

        <div className="hero-divider"></div>

          <p>
             Aspiring Technical Writer specializing in API documentation, user guides,
            developer workflows, and accessible technical content.
          </p>

          <div className="hero-buttons">
            <a
              className="button button--primary"
              href="/technical-writing-portfolio/docs/v19x-api"
            >
              View Writing Samples
            </a>

            <a
              className="button button--secondary"
              href="https://github.com/Brock-T-Wilson"
            >
              GitHub Profile
            </a>
          </div>

        </div>
      </div>  
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>About Me</h2>
          <p>
  I am an aspiring Technical Writer focused on creating clear,
  user-friendly documentation for both technical and non-technical audiences.

  I am currently building hands-on experience through API documentation,
  user guides, troubleshooting documentation, and accessibility-focused
  writing projects.

  My goal is to help users understand complex systems through simple,
  organized, and effective documentation.
</p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>Featured Projects</h2>

          <div className="project-grid">
            <div className="project-card">
              <img
  src={useBaseUrl('/img/v19x-logo.png')}
  alt="V19x API documentation preview"
  className="project-preview"
/>
              <h3>V19x API Documentation</h3>
              <p>
                API documentation focused on endpoints, requests, responses,
                and troubleshooting workflows.
              </p>
              <a href="https://github.com/Brock-T-Wilson/V19x-Player-Account-API-Docs">
                View GitHub Repository
              </a>
            </div>

            <div className="project-card">
  <img
    src={useBaseUrl('/img/titanx-preview.png')}
    alt="TitanX Agriculture Solutions documentation portal preview"
    className="project-preview"
  />

  <h3>TitanX Agriculture Solutions</h3>

  <p>
    Enterprise agricultural equipment documentation portal built with
    Docusaurus featuring operational procedures, troubleshooting
    workflows, maintenance systems, dealer support documentation,
    workflow diagrams, equipment specifications, and safety-focused
    technical content.
  </p>

  <a href="https://brock-t-wilson.github.io/TitanX-Agriculture-Solutions-Documentation/">
    View Live Documentation
  </a>
</div>

            <div className="project-card">
  <img
    src={useBaseUrl('/img/opsflow-logo.png')}
    alt="OpsFlow SaaS documentation platform logo"
    className="project-preview"
  />
  <h3>OpsFlow SaaS Documentation Platform</h3>
  <p>
    Enterprise SaaS documentation platform featuring workflow automation,
    API documentation, integrations, accessibility guidance, release notes,
    and a polished operations dashboard.
  </p>
  <a href="https://ops-flow-saa-s-documentation.vercel.app/">
    View Live Documentation
  </a>
</div>
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>Skills</h2>
          <div className="skills-grid">
  <span className="skill-badge">API Documentation</span>
  <span className="skill-badge">REST APIs</span>
  <span className="skill-badge">Markdown</span>
  <span className="skill-badge">Git & GitHub</span>
  <span className="skill-badge">Docusaurus</span>
  <span className="skill-badge">User Guides</span>
  <span className="skill-badge">Accessibility Documentation</span>
  <span className="skill-badge">Troubleshooting Guides</span>
</div>
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
  );
}