import { defineConfig } from 'vitepress';


export default defineConfig({
  title: '鸟白岛Torishiro使用指南',
  head:[
    ['link', { rel: 'icon', href: 'https://sa.torishiro.com/misskey/d888c9f4-6edc-4e07-ae70-e38523edc1bc.png' }],
    ["script", { src: '/js/main.js'}],
    ],
    themeConfig: {
      logo: 'https://sa.torishiro.com/misskey/d888c9f4-6edc-4e07-ae70-e38523edc1bc.png',
      siteTitle: '鸟白岛Torishiro',
      
      sidebar: {
        '/preamble/': [
          {text: '概括',
            items: [
              { text: '认识Misskey', link: '/preamble/about-misskey/' },
              { text: '寻找实例', link: '/preamble/find-instance/'},
              { text: '账号', link: '/preamble/account/'},
              { text: '常见问题', link: '/preamble/q&a/'},
          ]},
        ],
        '/basics/': [
          {text: '基础知识',
          items: [
            { text: '发帖', link: '/basics/post-noets/' },
            { text: '时间轴', link: '/basics/timeline/' },
            { text: '互动', link: '/basics/interactivity/' },
            { text: '侧边栏', link: '/basics/sidebar/' },
            { text: '设置', 
              items: [
                { text: '基础设置', link: '/basics/settings/'},
                { text: '客户端设置', link: '/basics/client-settings/'}
              ]},
            { text: '其他', link: '/basics/other/' },
            { text: '常见问题', link: '/basics/q&a/'},
          ]},
        ],       
        'torishiro': [
          {text: '更新日志',
            items: [
              { text: '更新日志', link: '/torishiro/Update-Log/' }
          ]},
        ],
        '/advanced/': [
          {text: '进阶知识',
            items: [
              { text: 'MFM', link: '/advanced/mfm/' },
          ]}
        ],
      },
      nav: [
          { text: '主页', link: '/'},
          {text: '概括',
            items: [
              { text: '认识Misskey', link: '/preamble/about-misskey/' },
              { text: '寻找实例', link: '/preamble/find-instance/'},
              { text: '常见问题', link: '/preamble/q&a/'},
          ]},
          {text: '基础知识',
            items: [
              { text: '发帖', link: '/basics/post-noets/' },
              { text: '时间轴', link: '/basics/timeline/' },
              { text: '互动', link: '/basics/interactivity/' },
              { text: '侧边栏', link: '/basics/sidebar/' },
              { text: 'APP', link: '/basics/app/' },
              { text: '设置', 
                items: [
                  { text: '基础设置', link: '/basics/settings/'},
                  { text: '客户端设置', link: '/basics/client-settings/'}
                ]},
              { text: '其他', link: '/basics/other/' },
              { text: '常见问题', link: '/basics/q&a/'},
          ]},
          {text: '更新日志',
            items: [
              { text: '更新日志', link: '/torishiro/Update-Log/' }
          ]},
          {text: '进阶知识',
            items: [
              { text: 'MFM', link: '/advanced/mfm/' },
          ]},
          { text: 'TOS', link: 'https://torishiro.com/@admin/pages/tos'},
        ],
      footer: {
          copyright: "This Page Use MIT Licensed | Copyright © 2024 torishiro.com運営チーム",
          message: ""
        },
        search: {
          provider: 'local'
        },
        lastUpdated: {
          text: '更新于 ',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        editLink: {
          pattern: 'https://github.com/beixibaobao/torishiro-wiki/edit/main/:path',
          text: '在GitHub上编辑'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/beixibaobao/torishiro-wiki' }
        ]
      }
});