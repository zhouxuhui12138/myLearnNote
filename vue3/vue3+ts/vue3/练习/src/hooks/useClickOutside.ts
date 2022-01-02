import { ref, onMounted, Ref } from "vue"

function useClickOutside(elementRef: Ref<null | HTMLElement>) {
  const isClick = ref(false)

  onMounted(() => {
    window.addEventListener("click", clickHandler)
  })

  const clickHandler = (e: MouseEvent) => {
    if (elementRef.value) {
      // 如果鼠标没有点击dropdown中的dom节点 则关闭dropdown
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        isClick.value = true
      } else {
        isClick.value = false
      }
    }
  }

  return isClick
}

export default useClickOutside
