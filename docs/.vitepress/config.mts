import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "vitepress-demo测试",
  description: "一个关于vitepress文档生成工具的测试",
  // 设定 public 根目录
  base: '/blog-vitepress-2024/',
  themeConfig: {
    // 主题级选项 https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '冠昊生物', link: '/guanhao/' }
    ],

    sidebar: [
      {
        text: '公司名称',
        items: [
          { text: '冠昊生物', link: '/guanhao/' },
          { text: '中昊药业', link: '/guanhao/zhonghao' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // rewrites: {
  //   // 路由重写
  //   'packages/pkg-a/src/pkg-a-docs.md': 'pkg-a/index.md',
  //   // 'packages/pkg-b/src/pkg-b-docs.md': 'pkg-b/index.md'
  // },

})
