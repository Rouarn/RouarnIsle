<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon, Typewriter } from 'animal-island-vue'
import { site } from '../config/site'
import avatarUrl from '../assets/avatar.png'

const tagIndex = ref(0)
let timer: number | undefined

function scheduleNext() {
  timer = window.setTimeout(() => {
    tagIndex.value = (tagIndex.value + 1) % site.taglines.length
    scheduleNext()
  }, 4200)
}

onMounted(scheduleNext)
onBeforeUnmount(() => window.clearTimeout(timer))
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <p class="greet">
          你好，我是 <span class="name">{{ site.name }}</span>
          <Icon name="Sailboat" :size="22" color="#19c8b9" />
        </p>
        <h1 class="title">{{ site.siteName }}</h1>
        <p class="tagline">
          <Typewriter :key="tagIndex" :speed="110">{{ site.taglines[tagIndex] }}</Typewriter>
        </p>
        <div class="actions">
          <a class="btn primary" :href="site.github" target="_blank" rel="noopener">
            <Icon name="Globe" :size="16" />
            GitHub
          </a>
          <a class="btn ghost" href="#projects">
            <Icon name="Compass" :size="16" />
            看看项目
          </a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="avatar-ring">
          <img :src="avatarUrl" :alt="site.siteName" class="avatar" />
        </div>
        <Icon class="float f1" name="Sun" :size="36" color="#f5c31c" />
        <Icon class="float f2" name="Bird" :size="28" color="#6fba2c" />
        <Icon class="float f3" name="Leaf" :size="26" color="#19c8b9" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 72px 0 88px;
  background:
    radial-gradient(circle at 12% 20%, var(--ai-bg-secondary) 0 64px, transparent 65px),
    radial-gradient(circle at 88% 72%, var(--ai-bg-secondary) 0 90px, transparent 91px);
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.hero-text {
  max-width: 560px;
}

.greet {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 700;
  color: var(--ai-text-secondary);
}

.name {
  color: var(--ai-primary);
  font-size: 20px;
}

.title {
  margin: 0 0 16px;
  font-size: 56px;
  line-height: 1.15;
  font-weight: 900;
  letter-spacing: 2px;
}

.tagline {
  min-height: 32px;
  margin: 0 0 28px;
  font-size: 20px;
  font-weight: 700;
  color: var(--ai-text);
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  border: 2px solid transparent;
  font-weight: 800;
  font-size: 15px;
  transition: all 0.12s ease;
}

.btn.primary {
  background: var(--ai-primary);
  color: #fff;
}

.btn.primary:hover {
  background: var(--ai-primary-hover);
}

.btn.ghost {
  border-color: var(--ai-border);
  background: #fff;
  color: var(--ai-text);
}

.btn.ghost:hover {
  border-color: var(--ai-primary);
  color: var(--ai-primary);
}

.hero-art {
  position: relative;
  flex-shrink: 0;
}

.avatar-ring {
  padding: 10px;
  border: 2px dashed var(--ai-border);
  border-radius: 999px;
  background: #fff;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 999px;
  object-fit: cover;
}

.float {
  position: absolute;
}

.f1 {
  top: -14px;
  right: -6px;
}

.f2 {
  top: 46%;
  left: -44px;
}

.f3 {
  bottom: -8px;
  right: 18px;
}

@media (prefers-reduced-motion: no-preference) {
  .float {
    animation: bob 3.2s ease-in-out infinite;
  }

  .f2 {
    animation-delay: 0.6s;
  }

  .f3 {
    animation-delay: 1.1s;
  }

  @keyframes bob {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-8px);
    }
  }
}

@media (max-width: 860px) {
  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
  }

  .greet {
    justify-content: center;
  }

  .actions {
    justify-content: center;
  }

  .title {
    font-size: 42px;
  }

  .avatar {
    width: 150px;
    height: 150px;
  }
}
</style>
