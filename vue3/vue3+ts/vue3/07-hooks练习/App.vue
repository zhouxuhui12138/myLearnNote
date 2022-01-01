<template>
  <h1 v-if="hPress">h键被按下了</h1>
</template>

<script lang="ts" setup>
import useKeyPress from './hooks/useKeyPress';
const hPress =  useKeyPress('h')

</script>

