import { onMounted, ref } from 'vue'

/** 网络异常时的兜底句子 */
const FALLBACK = { text: '用代码表达言语的魅力，用代码书写山河的壮丽。', from: '一言' }

export function useHitokoto() {
  const text = ref(FALLBACK.text)
  const from = ref(FALLBACK.from)
  const loading = ref(false)

  async function refresh() {
    loading.value = true
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), 5000)
      const res = await fetch('https://v1.hitokoto.cn/?max_length=30', { signal: controller.signal })
      clearTimeout(timer)
      if (!res.ok) throw new Error(String(res.status))
      const data = await res.json()
      if (data?.hitokoto) {
        text.value = data.hitokoto
        from.value = data.from_who || data.from || '一言'
      }
    } catch {
      /* 网络异常时保留当前句子 */
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { text, from, loading, refresh }
}
