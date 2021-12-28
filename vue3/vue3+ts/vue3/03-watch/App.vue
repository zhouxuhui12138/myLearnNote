<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>{{ title }}</h1>
    <button @click="add">点我</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"

const title = ref('hello')
function add() {
  title.value += '!'
}

watch(title, () => {
  document.title = title.value
})

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
