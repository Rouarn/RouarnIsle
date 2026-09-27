<script setup lang="ts">
import { Tag, Title } from 'animal-island-vue'
import { skills } from '../config/site'
</script>

<template>
  <section id="skills" class="section-block skills">
    <div class="container">
      <div class="sec-head">
        <Title variant="tab" color="app-yellow" size="large">技术栈</Title>
        <p class="sec-sub">日常造岛用的工具箱</p>
      </div>
      <div class="tags">
        <Tag v-for="s in skills" :key="s" size="large" variant="outlined">{{ s }}</Tag>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  text-align: center;
}

.sec-sub {
  margin: 0;
  color: var(--ai-text-secondary);
  font-size: 14px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}
</style>
