const config = {
  title: 'Brock Wilson',
  tagline: 'Technical Writing Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://Brock-T-Wilson.github.io',
  baseUrl: '/technical-writing-portfolio/',

  organizationName: 'Brock-T-Wilson',
  projectName: 'technical-writing-portfolio',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Brock Wilson',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://github.com/Brock-T-Wilson',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'V19x API Documentation',
              to: '/docs/v19x-api',
            },
            {
              label: 'Xbox Player Data API',
              to: '/docs/xbox-api',
            },
            {
              label: 'YouTube Sharing Guide',
              to: '/docs/youtube-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brock Wilson`,
    },
  },
};

export default config;