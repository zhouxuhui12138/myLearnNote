<template>
  <div class="dropdown" ref="drondownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click="toggle">你好 {{ title }}</a>
    <ul :class="['dropdown-menu', isOpen ? 'show' : '']">
      <li>
        <a class="dropdown-item" href="#">新建文章</a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="editUser" >编辑资料</a>
      </li>
      <li @click="loginOut">
        <a class="dropdown-item" href="#">退出登录</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import useClickOutside from '../hooks/useClickOutside'
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })

  const emits = defineEmits(['login-out'])
  const isOpen = ref(false)
  const drondownRef = ref<null | HTMLElement>(null)
  const isClickOutSide = useClickOutside(drondownRef)

  watch(isClickOutSide, () => {
    if (isOpen.value && isClickOutSide.value) {
      isOpen.value = false
    }
  })

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const loginOut = () => {
    emits('login-out')
  }

  // 修改用户名
  const editUser = () => {
    
  }
</script>

<style scoped lang="less">
.show {
  display: block !important;
}
</style>
