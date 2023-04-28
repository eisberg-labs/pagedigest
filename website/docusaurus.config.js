// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PageDigest',
  tagline: 'Get a quick summary of any web page with PageDigest: word count, characters, read time, text to HTML ratio.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.pagedigest.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eisberg-labs',
  projectName: 'pagedigest',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eisberg-labs/pagedigest/tree/main/website/',
        },
        gtag: {
          trackingID: 'G-QD31HT61VR',
          anonymizeIP: true,
        },
        blog: false, // Optional: disable the blog plugin
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
      image: 'logo.png',
      navbar: {
        title: 'PageDigest',
        logo: {
          alt: 'PageDigest Logo',
          src: 'logo.svg',
        },
        items: [
          {
            href: 'https://chrome.google.com/webstore/detail/pagedigest/maalbmdhcneklfnppmlbhileahnmflpa',
            label: 'Chrome store',
            position: 'right'
          },
          {
            href: 'https://github.com/eisberg-labs/pagedigest',
            label: 'Github',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eisberg Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
