import { onUnmounted, onMounted, reactive } from "vue"

export default function () {
  const point = reactive({
    x: 0,
    y: 0
  })

  function savePoint(e) {
    point.x = e.pageX
    point.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener("click", savePoint)
  })

  onUnmounted(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
