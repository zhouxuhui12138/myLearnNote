<template>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="sayHello">按钮</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: "App",
  setup() {
    let name = 'xz'
    let age = 18

    function sayHello() {
      console.log(`我叫${name}, 我今年${age}岁`)
    }

    // 返回一个对象 模板可以使用
    return { name, age, sayHello }

    // 返回一个渲染函数 直接渲染到页面
    // return () => h('p', name)
  }
}
</script>
