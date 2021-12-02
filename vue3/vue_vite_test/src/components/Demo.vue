<template>
  <h1>{{ person }}</h1>
  <hr>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ job.jobOne.gongzi }}K</h2>
  <button @click="name += '!'">修改名字</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.jobOne.gongzi++">涨工资</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue"

export default {
  name: "Demo",
  setup() {
    const person = reactive({
      name: "张三",
      age: 18,
      job: {
        jobOne: {
          gongzi: 20
        }
      }
    })

    // toRef 创建一个ref对象 其value值指向另外一个对象中的某个属性
    const name1 = toRef(person, 'name')
    console.log(name1)

    // toRefs和toRef功能相等 前者可以批量处理数据

    return { person, ...toRefs(person) }
  }
}
</script>
