<template>
  <teleport to="#modal">
    <div class="center" v-if="isOpen">
      <div>this is a modal</div>
      <button @click="handleClick">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emits = defineEmits(['close-modal'])

const handleClick = () => {
  emits('close-modal')
}

</script>

<style lang="less">
.center {
  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  text-align: center;
  background-color: skyblue;
  color: #fff;
  transform: translate(-50%, -50%);
}
</style>
