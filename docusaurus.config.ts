import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Shiyun Dadian',
    tagline: '石雲文獻大成·永樂大典',
    favicon: 'https://static.shiyun.org/yongle.png',
    noIndex: true,

    // Set the production url of your site here
    url: 'https://dian.shiyun.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    deploymentBranch: 'public',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'metashiyun', // Usually your GitHub org/user name.
    projectName: 'dadian', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans', 'en'],
        localeConfigs: {
            en: {
                htmlLang: 'en-US',
            }
        },
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/metashiyun/dadian/tree/main/',
                },
                blog: {
                    showReadingTime: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'https://static.shiyun.org/yongle.png',
        navbar: {
            title: '石云大典',
            logo: {
                alt: 'Shiyun Dadian',
                src: 'https://static.shiyun.org/yongle.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: '文档',
                },
                {to: '/pages', label: '散文和表格', position: 'left'},
                {to: '/blog', label: '网志', position: 'left'},
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/metashiyun',
                    label: '吉特埠',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: '元石云',
                    items: [
                        {
                            label: '官方网站',
                            href: 'https://www.shiyun.org',
                        },
                    ],
                },
                {
                    title: '大典',
                    items: [
                        {
                            label: '文档编',
                            to: '/docs/intro',
                        },
                        {
                            label: '散文编',
                            to: '/pages',
                        },
                        {
                            label: '网志编',
                            to: '/blog',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: '吉特埠',
                            href: 'https://github.com/metaShiyun',
                        }
                    ],
                },
            ],
            copyright: `© 2014 - ${new Date().getFullYear()} metaShiyun | 游戏内容纯属虚构，不与现实世界任何人、组织、事件存在联系。`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        }
    } satisfies Preset.ThemeConfig,
};

export default config;
