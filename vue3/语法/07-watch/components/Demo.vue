<template>
  <h2>{{ num }}</h2>
  <button @click="num++">点击num++</button>
  <hr />
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.jobOne.gongzi }}K</h2>
  <button @click="person.name += '!'">修改名字</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.jobOne.gongzi++">涨工资</button>
</template>

<script>
import { ref, watch, reactive, watchEffect } from "vue"

export default {
  name: "Demo",
  setup() {
    const num = ref(0)
    const person = reactive({
      name: "张三",
      age: 18,
      job: {
        jobOne: {
          gongzi: 20
        }
      }
    })

    // 监听基本数据类型
    // watch(
    //   num,
    //   (newVal, oldVal) => {
    //     console.log("num的值变化了", "新", newVal, "旧", oldVal)
    //   },
    //   {
    //     immediate: true
    //   }
    // )

    // 监听对象数据类型
    // watch(
    //   person,
    //   // bug
    //     // 此处无法正确拿到oldVal
    //     // 此处无法关闭深度监听 默认deep开启且关不掉
    //   (newVal, oldVal) => {
    //     console.log("person的值变化了", "新", newVal, "旧", oldVal)
    //   }
    // )

    // 监听对象里面的某一个数据需这样写
    // watch(
    //   () => person.age,
    //   (newVal, oldVal) => {
    //     console.log("age的值变化了", "新", newVal, "旧", oldVal)
    //   }
    // )

    // 监听对象里面的多个个数据需这样写
    // watch(
    //   () => [person.age, person.name],
    //   (newVal, oldVal) => {
    //     console.log("age or name的值变化了", "新", newVal, "旧", oldVal)
    //   }
    // )

    // 检视更深层的数据 又需要把deep开启
    // watch(
    //   () => person.job,
    //   (newVal, oldVal) => {
    //     console.log("job的值变化了", "新", newVal, "旧", oldVal)
    //   },
    //   { deep: true }
    // )

    watchEffect(() => {
      const n = num.value
      const money = person.job.jobOne.gongzi
      // 回调里面用到谁监听谁
      console.log('watchEffect执行了', n, money)
    })

    return { num, person }
  }
}
</script>
