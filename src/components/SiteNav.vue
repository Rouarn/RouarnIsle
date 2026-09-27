<script setup lang="ts">
import { site } from '../config/site'
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#home" class="brand">
        <img class="brand-avatar" src="../assets/avatar.png" :alt="site.siteName" />
        <span class="brand-name">{{ site.siteName }}</span>
        <span class="brand-en">{{ site.siteNameEn }}</span>
      </a>
      <nav class="links">
        <a href="#home">首页</a>
        <a href="#projects">项目</a>
        <a href="#skills">技能</a>
        <a href="#hitokoto">一言</a>
        <a class="gh" :href="site.github" target="_blank" rel="noopener">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--ai-bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid var(--ai-border-light);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-avatar {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  border: 2px solid var(--ai-border-light);
}

.brand-name {
  font-weight: 800;
  font-size: 18px;
}

.brand-en {
  color: var(--ai-text-secondary);
  font-size: 12px;
  align-self: flex-end;
  padding-bottom: 2px;
}

.links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-weight: 700;
  font-size: 15px;
}

.links a {
  color: var(--ai-text-secondary);
  transition: color 0.12s ease;
}

.links a:hover {
  color: var(--ai-primary);
}

.links .gh {
  border: 2px solid var(--ai-border);
  border-radius: 999px;
  padding: 4px 14px;
  color: var(--ai-text);
  background: #fff;
}

.links .gh:hover {
  border-color: var(--ai-primary);
  color: var(--ai-primary);
}

@media (max-width: 720px) {
  .brand-en {
    display: none;
  }

  .links {
    gap: 14px;
    font-size: 14px;
  }
}
</style>
