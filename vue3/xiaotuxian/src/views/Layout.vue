<template>
  <div class="layout">
    <AppNavBar />
    <AppHeader />

    <!-- 二级路由 -->
    <div class="main">
      <router-view></router-view>
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AppNavBar from "@/components/AppNavBar.vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  components: {
    AppNavBar,
    AppHeader,
    AppFooter
  }
})
</script>

<style scoped lang="less"></style>
