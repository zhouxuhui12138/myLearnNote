<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>X: {{ x }} Y: {{ y }}</h1>
  </div>

  <div>
    <h1 v-if="loading">Loading...</h1>
    <img v-if="finished" :src="result![0].url">
  </div>
</template>

<script setup lang="ts">
import useMousePosition from './hooks/useMousePosition'
import useLoading from './hooks/useLoading'

interface IDogRes {
  message: string
  status: string
}

interface ICatRes {
  url: string
  width: string
  height: string
}

const { x, y } = useMousePosition()
const { loading, finished, result } = useLoading<ICatRes[]>('https://api.thecatapi.com/v1/images/search?limit=1')

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
