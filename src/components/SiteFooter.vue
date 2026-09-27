<script setup lang="ts">
import { site } from '../config/site'
import avatarUrl from '../assets/avatar.png'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <img :src="avatarUrl" alt="" class="f-avatar" />
      <p class="f-line">© {{ year }} {{ site.name }} · {{ site.siteName }}</p>
      <p class="f-line f-dim">
        Powered by
        <a href="https://github.com/guokaigdg/animal-island-vue" target="_blank" rel="noopener">animal-island-vue</a>
        &amp;
        <a href="https://hitokoto.cn" target="_blank" rel="noopener">Hitokoto</a>
        <template v-if="site.icp">
          ·
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{ site.icp }}</a>
        </template>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 36px 0;
  background: var(--ai-bg-secondary);
  border-top: 2px solid var(--ai-border-light);
  text-align: center;
}

.f-avatar {
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  border-radius: 12px;
  border: 2px solid var(--ai-border-light);
}

.f-line {
  margin: 4px 0;
  font-weight: 700;
}

.f-dim {
  color: var(--ai-text-secondary);
  font-size: 13px;
  font-weight: 500;
}

.f-dim a {
  color: var(--ai-primary);
}
</style>
