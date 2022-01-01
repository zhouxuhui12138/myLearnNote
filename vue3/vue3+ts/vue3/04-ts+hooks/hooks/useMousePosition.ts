import { reactive, toRefs, onMounted, onUnmounted } from "vue"

function useMousePosition() {
  interface IPosition {
    x: number
    y: number
  }

  const position: IPosition = reactive({
    x: 0,
    y: 0
  })

  function updateMouse(e: MouseEvent) {
    position.x = e.pageX
    position.y = e.pageY
  }

  onMounted(() => {
    document.addEventListener("click", updateMouse)
  })
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse)
  })

  const positionRefs = toRefs(position)

  return { ...positionRefs }
}

export default useMousePosition
