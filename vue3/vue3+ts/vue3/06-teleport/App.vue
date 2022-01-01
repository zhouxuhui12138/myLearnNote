<template>
  <Modal :is-open="isOpen" @close-modal="closeMoadl" />
  <button @click="isOpen = true">打开Modal</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Modal from './components/Modal.vue'

const isOpen = ref(true)

const closeMoadl = () => {
  isOpen.value = false
}

</script>

