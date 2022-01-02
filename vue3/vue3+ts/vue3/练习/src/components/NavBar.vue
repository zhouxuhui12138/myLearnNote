<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!userInfo.isLogin" class="list-inline mb-0">
      <li class="list-inline-item" @click="login">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li>
        <Dropdown :title="`${userInfo.name}`" @login-out="loginOut" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import Dropdown from './Dropdown.vue'

export interface IUserProps {
  isLogin: boolean
  name?: string
  id?: number
}

const props = defineProps({
  userInfo: {
    type: Object as PropType<IUserProps>,
    required: true
  },
})

const emits = defineEmits(['login-out', 'login'])

const loginOut = () => {
  emits('login-out')
}

const login = () => {
  emits('login')
}

</script>
