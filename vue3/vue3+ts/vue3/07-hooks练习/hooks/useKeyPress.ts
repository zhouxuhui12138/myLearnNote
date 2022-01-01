import { ref, onMounted, onUnmounted } from 'vue'

function useKeyPress(key: string) {
  const falg = ref(false)

  const onKeyDown = (e: KeyboardEvent) => {
    if (key === e.key) {
      falg.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
  })

  return falg
}

export default useKeyPress
