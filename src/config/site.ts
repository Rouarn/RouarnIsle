import type { IconName } from "animal-island-vue";

/**
 * 站点内容统一配置：改这里即可，不用动组件。
 */
export interface ProjectItem {
  /** 项目名 */
  name: string;
  /** 一句话介绍 */
  description: string;
  /** 技术栈标签 */
  tech: string[];
  /** animal-island-vue 图标名（如 Compass / Anchor / Tree） */
  icon: IconName;
  /** 仓库或站点链接，留空则不显示外链 */
  link?: string;
}

export const site = {
  /** 展示名 */
  name: "Rouarn",
  /** 站名 */
  siteName: "我屿闲记",
  siteNameEn: "Rouarn Isle",
  /** 首屏逐句轮播的话 */
  taglines: [
    "在小屿上闲话开发。",
    "全栈工程师 · Vue3 / NestJS。",
    "把每一个想法，种成一座小岛。",
  ],
  description: "我屿闲记 — Rouarn 的个人小岛，闲话开发与开源。",
  github: "https://github.com/Rouarn",
  siteUrl: "https://woyuxiaji.cn/",
  /** 可选项：邮箱与 ICP 备案号，留空则不展示 */
  email: "",
  icp: "",
};

/** 我开发的项目 */
export const myProjects: ProjectItem[] = [
  {
    name: "frontend-template",
    description:
      "基于 Vue3、Vite、TypeScript、NaiveUI 与 UnoCSS 的清新优雅前台模板。",
    tech: ["Vue3", "Vite", "NaiveUI"],
    icon: "Compass",
  },
  {
    name: "nestjs-template",
    description:
      "基于 NestJS 的现代化后端 API 系统，内置 JWT 认证、文件管理与数据库 ORM。",
    tech: ["NestJS", "TypeORM", "JWT"],
    icon: "Anchor",
  },
  {
    name: "simple-bookkeeping",
    description: "简单好用的个人记账应用，让每一笔收支都清清楚楚。",
    tech: ["Vue3", "NestJS"],
    icon: "CreditCard",
  },
  {
    name: "vakao-static-hub",
    description: "静态资源聚合小站，集中收纳常用前端静态资源。",
    tech: ["Vue3", "Nginx"],
    icon: "Folder",
    link: "http://static.shixian.xyz/",
  },
  {
    name: "knowl-edge-base",
    description: "个人知识库，把散落的笔记与灵感归档成林。",
    tech: ["Vue3"],
    icon: "Book",
  },
  {
    name: "image-crawling",
    description: "图片批量爬取与整理的小工具。",
    tech: ["Node.js"],
    icon: "Image",
  },
];

/** 参与或了解的开源项目 */
export const ossProjects: ProjectItem[] = [
  {
    name: "animal-island-vue",
    description: "自然可爱风格的 Vue 3 UI 组件库，本站的设计语言即来源于此。",
    tech: ["Vue3", "TypeScript", "Less"],
    icon: "Tree",
    link: "https://github.com/guokaigdg/animal-island-vue",
  },
  {
    name: "hitokoto-api",
    description: "一言开源社区的接口程序，本站「一言」栏目正在使用它。",
    tech: ["Node.js", "Koa"],
    icon: "Chat",
    link: "https://github.com/hitokoto-osc/hitokoto-api",
  },
];

/** 技术栈 */
export const skills = [
  "Vue3",
  "TypeScript",
  "NestJS",
  "Vite",
  "UnoCSS",
  "Node.js",
  "MySQL",
  "Nginx",
];
