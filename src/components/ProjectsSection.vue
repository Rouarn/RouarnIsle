<script setup lang="ts">
import { Icon, Title } from 'animal-island-vue'
import { myProjects, ossProjects } from '../config/site'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section-block projects">
    <div class="container">
      <div class="sec-head">
        <Title variant="layer" color="app-teal" size="large">项目墙</Title>
        <p class="sec-sub">我在小岛上种下的东西，虚线卡片是参与的开源项目</p>
      </div>

      <div class="group">
        <h3 class="group-title">
          <Icon name="Flag" :size="20" color="#19c8b9" />
          我的项目
        </h3>
        <div class="grid">
          <ProjectCard v-for="p in myProjects" :key="p.name" :project="p" />
        </div>
      </div>

      <div class="group">
        <h3 class="group-title">
          <Icon name="Tree" :size="20" color="#6fba2c" />
          参与的开源
        </h3>
        <div class="grid">
          <ProjectCard v-for="p in ossProjects" :key="p.name" :project="p" oss />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: color-mix(in srgb, var(--ai-bg-secondary) 55%, transparent);
  border-top: 2px solid var(--ai-border-light);
  border-bottom: 2px solid var(--ai-border-light);
}

.sec-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  text-align: center;
}

.sec-sub {
  margin: 0;
  color: var(--ai-text-secondary);
  font-size: 14px;
}

.group {
  margin-bottom: 36px;
}

.group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 800;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
