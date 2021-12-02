<template>
  <h2>{{ num }}</h2>
  <button @click="num++">点击num++</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted  } from "vue"

export default {
  name: "Demo",
  setup() {
    const num = ref(0)

    // 以组合式api方式来写生命周期函数 之前的写法也可以用

    // setup就相当于beforecreate和created
    console.log('beforecreate, created')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    
    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })


    return { num }
  }
}
</script>
