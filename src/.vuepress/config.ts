import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // base: "/blog/",
  dest: "src/.vuepress/dist",
  lang: "zh-CN",
  title: "醒醒同学",
  description: "醒醒同学分享的关于自由职业和教练的那些事",
  head: [ 
    ['link', { rel: 'icon', href: 'https://vip.helloimg.com/i/2024/03/02/65e2a7e03be1c.jpg' }],

    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-8J2XHXFRPY",async: true}],
    ['script', {},
                " window.dataLayer = window.dataLayer || [];\
                function gtag(){dataLayer.push(arguments);}\
                gtag('js', new Date());\
                gtag('config', 'G-8J2XHXFRPY');"],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
