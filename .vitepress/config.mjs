import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'UI 设计规范',
  description: '公司产品 UI 设计规范 v0.1 —— 统一设计语言与前端实现标准',

  // 规范只定义浅色主题，站点固定为浅色，避免阅读时与规范色值产生偏差
  appearance: false,
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3370FF' }]
  ],

  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-light' }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'UI 设计规范',

    nav: [
      { text: '指南', link: '/guide/', activeMatch: '^/guide/' },
      { text: '设计基础', link: '/foundation/color', activeMatch: '^/foundation/' },
      { text: '组件', link: '/components/button', activeMatch: '^/components/' },
      { text: '资源', link: '/resources/trae-rules', activeMatch: '^/resources/' },
      { text: 'v0.1', link: '/guide/#版本信息' }
    ],

    sidebar: [
      {
        text: '开始',
        collapsed: false,
        items: [
          { text: '规范总览', link: '/guide/' },
          { text: '设计原则', link: '/guide/principles' }
        ]
      },
      {
        text: '设计基础',
        collapsed: false,
        items: [
          { text: '色彩规范', link: '/foundation/color' },
          { text: '字体与排版', link: '/foundation/typography' },
          { text: '间距与栅格', link: '/foundation/spacing' },
          { text: '圆角与阴影', link: '/foundation/radius-shadow' }
        ]
      },
      {
        text: '组件规范',
        collapsed: false,
        items: [
          { text: '按钮 Button', link: '/components/button' },
          { text: '表单 Form', link: '/components/form' },
          { text: '表格 Table', link: '/components/table' },
          { text: '弹窗 Modal', link: '/components/modal' }
        ]
      },
      {
        text: '交互与交付',
        collapsed: false,
        items: [
          { text: '交互与可访问性', link: '/guide/accessibility' },
          { text: '交付与验收', link: '/guide/delivery' }
        ]
      },
      {
        text: '附录',
        collapsed: false,
        items: [{ text: 'Trae 规则文件', link: '/resources/trae-rules' }]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    outlineTitle: '本页目录',
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },

    footer: {
      message: '本文件是规范的唯一源文件，Trae 规则与前端 Token 均由此派生。',
      copyright: '公司产品 UI 设计规范 · v0.1'
    },

    socialLinks: []
  }
})
