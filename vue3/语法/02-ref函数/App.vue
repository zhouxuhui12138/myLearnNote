<template>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h3>{{ author.hobbile }}</h3>
  <h3>{{ author.sex }}</h3>
  <button @click="changeData">按钮</button>
</template>

<script>
// ref函数用来实现响应式更新数据
import { ref } from 'vue'

export default {
  name: "App",
  setup() {
    let name = ref('张三')
    let age = ref(18)
    const author = ref({
      hobbile: '吃饭',
      sex: '男'
    })

    function changeData() {
      name.value = '李四'
      age.value = 25
      author.value.hobbile = '睡觉'
      author.value.sex = '女'
    }

    return { name, age, author, changeData }
  }
}
</script>
