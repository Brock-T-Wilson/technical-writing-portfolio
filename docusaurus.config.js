const config = {
  title: 'Brock Wilson',
  tagline: 'Technical Writing Portfolio',
  favicon: 'favicon.ico',

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
  links: [],
  copyright: `Brock Wilson © ${new Date().getFullYear()} | Technical Writing Portfolio`,
  },
},
};

export default config;