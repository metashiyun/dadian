import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro', // document ID
      label: '首页', // sidebar label
    },
    {
      type: 'category',
      label: '总览',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview/info',
          label: '基本信息'
        },
        {
          type: 'doc',
          id: 'overview/allowlist',
          label: '关于白名单'
        },
        {
          type: 'doc',
          id: 'overview/login',
          label: '关于登录验证'
        },
      ],
    },
    {
      type: 'category',
      label: '企划',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'kikaku/limited',
          label: '限定活动'
        },
        {
          type: 'doc',
          id: 'kikaku/shiyun-verse',
          label: '石云宇宙 ShiyunVerse'
        },
        {
          type: 'doc',
          id: 'kikaku/ssmp',
          label: '服务端和插件'
        },
      ]
    },
    {
      type: 'category',
      label: '社区信息',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'community',
          label: '玩家群组'
        }
      ]
    },
    {
      type: 'category',
      label: '红石云工场',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'shiyun-works/basic-rule',
          label: '基本规则'
        },
        {
          type: 'doc',
          id: 'shiyun-works/regions',
          label: '区划总览'
        },
        {
          type: 'doc',
          id: 'shiyun-works/maps',
          label: '地图和GIS'
        }
      ]
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
