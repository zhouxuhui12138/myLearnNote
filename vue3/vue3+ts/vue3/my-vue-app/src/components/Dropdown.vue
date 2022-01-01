<template>
  <div class="dropdown">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click="toggle">你好 {{ title }}</a>
    <ul :class="['dropdown-menu', isOpen ? 'show' : '']">
      <li>
        <a class="dropdown-item" href="#">新建文章</a>
      </li>
      <li>
        <a class="dropdown-item" href="#">编辑资料</a>
      </li>
      <li @click="loginOut">
        <a class="dropdown-item" href="#">退出登录</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })

  const emits = defineEmits(['login-out'])

  const isOpen = ref(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const loginOut = () => {
    emits('login-out')
  }
</script>

<style scoped lang="less">
.show {
  display: block !important;
}
</style>
