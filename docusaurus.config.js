// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gentlent Developers',
  tagline: 'Our documentation around APIs and technical infrastructure.',
  favicon: 'https://s1.gentcdn.com/images/branding/gentlentg/favicon-64.png',

  url: 'https://developers.gentlent.com',
  baseUrl: '/',

  organizationName: 'gentlent',
  projectName: 'developers-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/gentlent/developers-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Gentlent Developers',
          src: 'https://s1.gentcdn.com/dynamic/logo?l2=For+Developers+',
          srcDark: 'https://s1.gentcdn.com/dynamic/logo?l2=For+Developers+&inverted=1',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.gentlent.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/gentlent',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tools API',
                to: '/docs/tools-api/',
              },
            ],
          },
          {},
          {
            title: 'Legal',
            items: [
              {
                label: 'Code of Conduct',
                href: 'https://www.gentlent.com/policies/code-of-conduct',
              },
              {
                label: 'Legal Notice',
                href: 'https://www.gentlent.com/policies/legal-notice',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.gentlent.com/policies/privacy',
              },
            ],
          },
          {
            title: 'About us',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.gentlent.com',
              },
              {
                label: 'Community',
                href: 'https://community.gentlent.com',
              },
              {
                label: 'Contact us',
                href: 'https://www.gentlent.com/contact',
              },
              {
                label: 'Gentlent.com',
                href: 'https://www.gentlent.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by Gentlent and/or its subsidiaries.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ['uri', 'url', 'http', 'json'],
      },
    }),
};

module.exports = config;
