<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>{{ data.count }}</h1>
    <h1>{{ data.double }}</h1>
    <button @click="data.increase">+1</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, onUpdated } from "vue"

interface DataProps {
  count: number,
  increase: () => void,
  double: number
}

const data: DataProps = reactive({
  count: 0,
  increase: () => data.count++,
  double: computed(() => data.count * 2)
})

onUpdated(() => {
  console.log(data.count)
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
