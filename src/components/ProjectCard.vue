<script setup lang="ts">
import { Icon, Tag } from 'animal-island-vue'
import type { ProjectItem } from '../config/site'

defineProps<{ project: ProjectItem; oss?: boolean }>()
</script>

<template>
  <article class="card" :class="{ oss }">
    <header class="card-head">
      <span class="card-icon"><Icon :name="project.icon" :size="22" /></span>
      <h4 class="card-name">{{ project.name }}</h4>
      <a
        v-if="project.link"
        class="card-link"
        :href="project.link"
        target="_blank"
        rel="noopener"
        :aria-label="`${project.name} 仓库`"
      >
        <Icon name="Share" :size="16" />
      </a>
    </header>
    <p class="card-desc">{{ project.description }}</p>
    <footer class="card-tags">
      <Tag v-for="t in project.tech" :key="t" size="small" variant="soft">{{ t }}</Tag>
    </footer>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: #fff;
  border: 2px solid var(--ai-border-light);
  border-radius: 18px;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease,
    border-color 0.12s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--ai-primary);
  box-shadow: 0 8px 20px var(--ai-shadow-soft);
}

.card.oss {
  border-style: dashed;
  border-color: #b5d98a;
}

.card.oss:hover {
  border-color: var(--ai-success);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-icon {
  display: inline-flex;
  color: var(--ai-text);
}

.card-name {
  margin: 0;
  font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Consolas, monospace;
  font-size: 15px;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.card-link {
  margin-left: auto;
  display: inline-flex;
  color: var(--ai-text-secondary);
  transition: color 0.12s ease;
}

.card-link:hover {
  color: var(--ai-primary);
}

.card-desc {
  margin: 0;
  flex: 1;
  color: var(--ai-text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
