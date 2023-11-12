/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KubeFin',
  tagline: 'Drive the most value from every dollar you invest in the cloud.',
  url: 'https://kubefin.dev',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicons/favicon.ico',
  organizationName: 'kubefin', // Usually your GitHub org/user name.
  projectName: 'kubefin.dev', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    announcementBar: {
      id: 'start',
      content:
          '<div class="header-item">⭐️ If you like KubeFin, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kubefin/kubefin">GitHub</a>!⭐️</div>',
    },
    algolia: {
      appId: 'Q10WTU7MC9',
      apiKey: 'f1e2a152877330bf9852ac76ca7499fa',
      indexName: 'kubefin',
      contextualSearch: false,
    },
    navbar: {
      title: 'KubeFin',
      logo: {
        alt: 'KubeFin',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/kubefin/community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://github.com/kubefin/kubefin',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Slack ( #kubefin )',
              href: 'https://kubefin.slack.com/',
            },
            {
              html: '<div class="wechat"> <a class="wechat-label">Wechat Group(Scan code to request joining)</a> <a class="wechat-img" rel="noreferrer noopener" aria-label="Wechat Group"><img src="img/kubefin-assistant.jpg" alt="Broker wechat to add you into the user group."></div>',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kubefin/kubefin',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `
        <br />
        <strong>© KubeFin Authors ${new Date().getFullYear()} | Documentation Distributed under <a href="https://creativecommons.org/licenses/by/4.0">CC-BY-4.0</a> </strong>
        <br />
        <br />
        © ${new Date().getFullYear()} The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage</a> page.
      `,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['cue', 'powershell'],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicons/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicons/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicons/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicons/favicon.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicons/favicon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/img/favicons/site.webmanifest',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'mask-icon',
        color: '#ffffff',
        href: '/img/favicons/safari-pinned-tab.svg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#ffffff',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-config',
        content: '/img/favicons/browserconfig.xml',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: function ({locale, docPath}) {
            return `https://github.com/kubefin/kubefin-website/edit/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl: 'https://github.com/kubefin/kubefin-website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  scripts: [
    {
      src: '/custom.js',
      async: true,
    },
    {
      src: '//g.alicdn.com/mamba/assets/0.0.15/mse-arc-ui.min.js',
    },
  ],
  stylesheets: [
    {
      href: '//g.alicdn.com/mamba/assets/0.0.15/mse-arc-ui.min.css',
    },
  ],
};
