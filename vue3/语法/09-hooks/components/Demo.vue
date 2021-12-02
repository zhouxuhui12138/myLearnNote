<template>
  <h2>{{ num }}</h2>
  <button @click="num++">点击num++</button>
  <hr />
  <h2>鼠标坐标 X: {{ point.x }} Y: {{ point.y }}</h2>
</template>

<script>
import { ref } from "vue"
import usePoint from "../hooks/usePoint"

export default {
  name: "Demo",
  setup() {
    const num = ref(0)
    const point = usePoint()

    return { num, point }
  }
}
</script>
