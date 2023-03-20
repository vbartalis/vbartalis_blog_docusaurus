// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// const math = require("remark-math");
// const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bartalis Vilmos",
  // tagline: "Welcome to my site! Üdvözöllek az oldalamon!",
  url: "https://vbartalis.github.io",
  baseUrl: "/vbartalis",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vbartalis", // Usually your GitHub org/user name.
  projectName: "vbartalis", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "hu",
    locales: ["hu"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/vbartalis/vbartalis.github.io/tree/master/",
          // remarkPlugins: [math],
          // rehypePlugins: [[katex, { strict: false }]],
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/vbartalis/vbartalis.github.io/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Docs",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/vbartalis/vbartalis",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          //todo
          {
            title: "Blog",
            items: [
              {
                label: "Versek",
                to: "/blog/tags/vers",
              },
              {
                label: "Címkék",
                to: "/blog/tags",
              },
            ],
          },
          {
            title: "Közösség",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/vbartalis",
              },
            ],
          },
          {
            title: "Egyéb",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              // {
              //   label: "GitHub",
              //   href: "https://github.com/vbartalis/vbartalis.github.io",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${
          2022 === new Date().getFullYear()
            ? new Date().getFullYear()
            : 2022 + "-" + new Date().getFullYear()
        } vbartalis. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          // autoCollapseCategories:true,
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "HSk3gg9V-q_SBGq7DWfIldGf3ZnIkc14LNwpoqxRLRU",
        },
      ],
    }),
};

module.exports = config;
