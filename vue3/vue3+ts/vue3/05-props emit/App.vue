<template>
  <Hello :msg="msg" @onSon="onSon" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Hello from './components/Hello.vue'

const msg = ref('hello')

setInterval(() => {
  msg.value += '!'
}, 10000)


const onSon = (sonMsg: any) => {
  console.log(sonMsg)
}

</script>
