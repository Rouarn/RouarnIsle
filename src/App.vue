<script setup lang="ts">
import { BackTop } from 'animal-island-vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import HitokotoSection from './components/HitokotoSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <HitokotoSection />
  </main>
  <SiteFooter />
  <BackTop :visibility-height="400" :duration="300" :style="{ right: '24px', bottom: '24px' }" />
</template>
