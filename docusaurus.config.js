// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Squad API Docs",
  tagline: "Squad API Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.squadco.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "squad", // Usually your GitHub org/user name.
  projectName: "habaripay.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    "https://docusaurus.io/script.js",
    {
      src: "https://checkout.squadco.com/widget/squad.min.js",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/HabariPay/habaripay.github.io/tree/main/",
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: "DOCS",

        logo: {
          alt: "My Site Logo",
          src: "img/squad_logo.svg",
          width: 146,
          height: 22,
        },

        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Guide",
          // },
          {
            type: "search",
            position: "right",
          },
          {
            label: "Support",
            position: "right",
            href: "https://squadco.com/support/",
            target: "_blank",
            rel: null,
            className: "nav-link_suppport",
          },
          // {
          //   type: "separator",
          //   position: "right",
          // },
          {
            to: "https://dashboard.squadco.com/sign-up",
            label: "Create Account",
            position: "right",
          },
          {
            to: "https://dashboard.squadco.com/login",
            label: "Sign In",
            position: "right",
            className: "nav-link_login",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
