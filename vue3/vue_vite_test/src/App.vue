<template>
  <button @click="isDemoShow = !isDemoShow">显示隐藏组件</button>
  <demo  v-if="isDemoShow"/>
</template>

<script>
import { ref } from 'vue'
import Demo from "./components/Demo.vue"

export default {
  name: "App",
  components: { Demo },
  setup() {
    const isDemoShow = ref(true)

    return { isDemoShow }
  }
}
</script>
