<template>
  <h1>{{ msg }}</h1>
  <button @click="set">给父组件发送事件</button>
</template>

<script lang="ts" setup>
import { defineProps, watch, defineEmits } from 'vue'
const props = defineProps<{
  msg: string,
  num?: number
}>()

watch(() => props.msg, () => {
  console.log('msg的值改变了')
})

const emits = defineEmits(['onSon'])
function set() {
  emits('onSon', '我是子组件传过来的消息')
}


</script>
