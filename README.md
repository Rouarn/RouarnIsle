# 我屿闲记 · Rouarn Isle

> Rouarn 的个人小岛 —— 一个闲话开发、展示项目与开源足迹的个人主页。
> 在线访问：[https://woyuxiaji.cn/](https://woyuxiaji.cn/)

纯静态、配置驱动的单页个人主页。所有展示内容集中在一个配置文件中，**不改组件即可完成绝大部分个性化修改**；视觉采用自然手绘风格的 [animal-island-vue](https://github.com/guokaigdg/animal-island-vue) 组件库。

---

## 目录

- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [目录结构](#目录结构)
- [内容自定义](#内容自定义)
- [样式与设计变量](#样式与设计变量)
- [构建与部署](#构建与部署)
- [浏览器兼容与无障碍](#浏览器兼容与无障碍)
- [致谢](#致谢)

---

## 功能特性

- **首页 Hero**：头像 + 站名，标语以打字机效果逐句轮播（约每 4.2 秒切换），配 GitHub / 项目锚点按钮与漂浮装饰图标。
- **项目墙**：分为「我的项目」与「参与的开源」两组卡片网格，支持技术栈标签与外链；开源项目以虚线卡片区分。
- **技术栈**：标签云形式展示技能关键词。
- **一言**：客户端实时请求 [Hitokoto 开放接口](https://developer.hitokoto.cn/)，每次刷新随机展示一句话，支持手动「换一句」；请求 5 秒超时，网络异常时使用兜底句子、不阻塞页面。
- **其他细节**：吸顶毛玻璃导航、回到顶部按钮、页脚自动更新年份、ICP 备案号按需展示。
- **响应式布局**：卡片网格在桌面 3 列、平板 2 列、手机 1 列；小屏下 Hero 自动纵向排列。
- **尊重系统设置**：遵循 `prefers-reduced-motion`，用户开启"减少动态效果"时停用漂浮动画。

## 技术栈

| 分类 | 选型 |
| --- | --- |
| 框架 | Vue 3（`<script setup>` + Composition API） |
| 语言 | TypeScript 5（`strict` 模式） |
| 构建 | Vite 6 |
| 样式 | UnoCSS（`presetUno`）+ 各组件 scoped CSS + CSS 变量 |
| UI 组件库 | animal-island-vue（Icon / Tag / Title / Typewriter / BackTop 等） |
| 外部接口 | Hitokoto `https://v1.hitokoto.cn/`（浏览器端直接请求） |

## 快速开始

### 环境要求

- **Node.js 18.18+**（推荐 20 LTS 或更高版本）
- npm（仓库附带 `package-lock.json`，也可换用 pnpm / yarn）

### 安装与运行

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（默认 http://localhost:5173，支持热更新）
npm run dev

# 3. 类型检查 + 生产构建，产物输出到 dist/
npm run build

# 4. 本地预览生产构建
npm run preview
```

## 目录结构

```text
rouarn-isle/
├── index.html               # HTML 入口（标题、meta description、语言）
├── package.json
├── vite.config.ts           # Vite 配置（base: './' 相对路径）
├── uno.config.ts            # UnoCSS 配置（presetUno）
├── tsconfig.json            # TS 严格模式配置
├── public/
│   └── favicon.ico          # 站点图标
└── src/
    ├── main.ts              # 应用入口：挂载 Vue、引入样式
    ├── App.vue              # 根组件：组合页面各板块 + 回到顶部
    ├── config/
    │   └── site.ts          # ★ 站点全部内容的统一配置
    ├── composables/
    │   └── useHitokoto.ts   # 一言请求逻辑（超时/兜底/刷新）
    ├── components/
    │   ├── SiteNav.vue        # 吸顶导航
    │   ├── HeroSection.vue    # 首屏（打字机轮播、头像）
    │   ├── ProjectsSection.vue# 项目墙（两组项目）
    │   ├── ProjectCard.vue    # 单个项目卡片
    │   ├── SkillsSection.vue  # 技术栈标签
    │   ├── HitokotoSection.vue# 一言卡片
    │   └── SiteFooter.vue     # 页脚
    ├── styles/
    │   └── global.css       # 全局样式与设计变量
    └── assets/
        └── avatar.png       # 头像（导航 / 首屏 / 页脚共用）
```

## 内容自定义

日常维护基本只需要改 [src/config/site.ts](src/config/site.ts)，文件顶部即有注释说明。

### 1. 站点信息（`site` 对象）

```ts
export const site = {
  name: 'Rouarn',            // 展示名（首屏称呼、页脚署名）
  siteName: '我屿闲记',       // 中文站名
  siteNameEn: 'Rouarn Isle', // 英文站名（导航副标）
  taglines: ['...'],         // 首屏逐句轮播的标语，可增减条数
  description: '...',        // 站点描述
  github: 'https://github.com/Rouarn', // GitHub 链接
  siteUrl: 'https://woyuxiaji.cn/',    // 站点地址
  email: '',                 // 预留字段（当前页面未展示）
  icp: '',                   // ICP 备案号，填写后页脚自动展示
}
```

> 注意：浏览器标签页标题与 `meta description` 目前写在 [index.html](index.html) 中，改名时记得同步修改。

### 2. 项目列表（`myProjects` / `ossProjects`）

每个项目遵循 `ProjectItem` 结构：

```ts
{
  name: 'frontend-template',            // 项目名（等宽字体展示）
  description: '一句话介绍……',          // 卡片描述
  tech: ['Vue3', 'Vite', 'NaiveUI'],   // 技术栈标签
  icon: 'Compass',                     // animal-island-vue 图标名
  link: 'https://...',                 // 可选：外链；留空则不显示跳转按钮
}
```

- `myProjects`：自己的项目（实线卡片）；`ossProjects`：参与/关注的开源项目（虚线卡片）。
- 增删数组中的条目即可，网格会自动响应式排版。
- `icon` 的类型为组件库导出的 `IconName`，填错时 TypeScript 会在构建期报错，可据此查阅可用图标。

### 3. 技术栈（`skills`）

一个字符串数组，直接增删即可：

```ts
export const skills = ['Vue3', 'TypeScript', 'NestJS', 'Vite']
```

### 4. 头像与图标

- **头像**：替换 [src/assets/avatar.png](src/assets/avatar.png)（导航、首屏、页脚三处共用，会经 Vite 构建并加内容哈希）。
- **favicon**：替换 [public/favicon.ico](public/favicon.ico)。

### 5. 一言

请求逻辑封装在 [src/composables/useHitokoto.ts](src/composables/useHitokoto.ts)：

- 接口：`https://v1.hitokoto.cn/?max_length=30`（限制句子长度）；
- 5 秒超时（`AbortController`），失败时保留当前句子，首次加载失败显示兜底句；
- 如需更换句子分类、长度或接口地址，修改该文件中的请求 URL 与 `FALLBACK` 常量即可。

## 样式与设计变量

全局设计变量定义在 [src/styles/global.css](src/styles/global.css)，与 animal-island-vue 的自然手绘风格保持一致：

```css
:root {
  --ai-primary: #19c8b9;         /* 主色（青绿色） */
  --ai-primary-hover: #3dd4c6;
  --ai-success: #6fba2c;
  --ai-warning: #f5c31c;
  --ai-text: #794f27;            /* 主文字（暖棕色） */
  --ai-text-secondary: #9f927d;
  --ai-border: #aaa69d;
  --ai-border-light: #e8e2d6;
  --ai-bg: #f8f8f0;              /* 页面底色（米白） */
  --ai-bg-secondary: #f0e8d8;
  --ai-bg-note: #fffbe7;
  --ai-shadow-soft: rgba(61, 52, 40, 0.08);
}
```

调整主题色只需修改这些 CSS 变量；`.container`（最大宽度 1080px、两侧 8% 留白）与 `.section-block`（板块纵向间距）是全站通用布局类。字体优先使用组件库自带的 Nunito / Noto Sans SC，并回退到系统中文字体。

## 构建与部署

```bash
npm run build
```

产物全部输出到 `dist/`，为纯静态文件（HTML/CSS/JS/字体/图片）。

注意 [vite.config.ts](vite.config.ts) 中设置了 `base: './'`，构建产物使用**相对路径引用资源**，因此：

- 可以部署在域名根目录，也可以直接放在任意子目录下，无需改配置；
- 页面内导航均为 `#home` / `#projects` 等锚点，单 HTML 文件即可工作，不依赖服务端路由回退。

### Nginx 静态部署示例

```nginx
server {
    listen 80;
    server_name woyuxiaji.cn;
    root /var/www/rouarn-isle;   # 指向 dist 目录内容
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

部署流程：本地执行 `npm run build` → 将 `dist/` 内全部文件上传到服务器静态目录（或对接 OSS/CDN、GitHub Pages 等静态托管）即可。

## 浏览器兼容与无障碍

- 面向现代浏览器（Chrome / Edge / Firefox / Safari 的近期版本），样式中使用了 `color-mix()` 等较新 CSS 特性；
- 动画通过 `@media (prefers-reduced-motion: no-preference)` 包裹，尊重系统"减少动态效果"设置；
- 装饰性图片与图标设置了 `aria-hidden`，外链图标按钮提供 `aria-label`；
- TypeScript 开启 `strict`、`noUnusedLocals`、`noUnusedParameters`，`npm run build` 会先执行 `vue-tsc` 类型检查，类型不通过将无法构建。

## 致谢

- [animal-island-vue](https://github.com/guokaigdg/animal-island-vue) —— 自然可爱风格的 Vue 3 组件库，本站设计语言与图标的来源；
- [Hitokoto 一言](https://hitokoto.cn/) —— 随机句子开放接口及其[开源社区](https://github.com/hitokoto-osc/hitokoto-api)。
