<template>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ msg }}</h2>

  <button @click="test">按钮</button>
</template>

<script>
import { reactive } from "vue"

export default {
  name: "Demo",
  props: ['msg'],
  // 这边写发出去的事件
  emits: ['hello'],

  // setup中不能使用this
  setup(props, context) {
    const person = reactive({
      name: "张三",
      age: 18
    })

    // props是父组件传过来的数据
    console.log(props)

    // 子传父 自定义事件这样写
    function test() {
      context.emit('hello', 'hello Vue3')
    }

    return { person, test }
  }
}
</script>
