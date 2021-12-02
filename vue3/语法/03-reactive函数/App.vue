<template>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h3>{{ author.hobby }}</h3>
  <h3>{{ author.sex }}</h3>
  <button @click="changeData">按钮</button>
</template>

<script>
// ref函数用来实现响应式更新数据
import { ref, reactive } from 'vue'

export default {
  name: "App",
  setup() {
    let name = ref('张三')
    let age = ref(18)
    // reactive用来让对象变成响应式的 基本类型用ref
    const author = reactive({
      hobby: '吃饭',
      sex: '男'
    })

    function changeData() {
      name.value = '李四'
      age.value = 25
      author.hobby = '睡觉'
      author.sex = '女'
    }

    return { name, age, author, changeData }
  }
}
</script>
