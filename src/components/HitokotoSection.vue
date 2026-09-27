<script setup lang="ts">
import { Icon, Title } from 'animal-island-vue'
import { useHitokoto } from '../composables/useHitokoto'

const { text, from, loading, refresh } = useHitokoto()
</script>

<template>
  <section id="hitokoto" class="section-block hitokoto">
    <div class="container">
      <div class="sec-head">
        <Title variant="ribbon" color="lime-green" size="large">一言</Title>
        <p class="sec-sub">来自 hitokoto 的随机一句话，每次来访都不同</p>
      </div>
      <figure class="quote-card">
        <blockquote>「{{ text }}」</blockquote>
        <figcaption>—— {{ from }}</figcaption>
        <button class="refresh" :disabled="loading" aria-label="换一句" @click="refresh">
          <Icon name="Refresh" :size="18" />
        </button>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.hitokoto {
  background: color-mix(in srgb, var(--ai-bg-secondary) 55%, transparent);
  border-top: 2px solid var(--ai-border-light);
}

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

.quote-card {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 36px 44px;
  background: var(--ai-bg-note);
  border: 2px dashed var(--ai-border);
  border-radius: 24px;
}

blockquote {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.8;
}

figcaption {
  color: var(--ai-text-secondary);
  font-size: 14px;
  text-align: right;
}

.refresh {
  position: absolute;
  right: 16px;
  bottom: -20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 2px solid var(--ai-border);
  background: #fff;
  color: var(--ai-text);
  cursor: pointer;
  transition:
    color 0.12s ease,
    border-color 0.12s ease,
    transform 0.12s ease;
}

.refresh:hover:not(:disabled) {
  color: var(--ai-primary);
  border-color: var(--ai-primary);
  transform: rotate(60deg);
}

.refresh:disabled {
  opacity: 0.6;
  cursor: wait;
}
</style>
