import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // base: "/blog/",
  dest: "src/.vuepress/dist",
  lang: "zh-CN",
  title: "醒醒同学",
  description: "醒醒同学分享的关于自由职业和教练的那些事",
  head: [ 
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/zll-0405/image/photo/logo.jpg' }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
