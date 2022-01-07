<template>
  <div>
    <h1>当前的数字为：{{ count }}</h1>
    <h1>数字ProMax：{{ $store.getters.countProMax }}</h1>
    <hr>
    <button @click="add" style="margin-right: 10px">+</button>
    <button @click="sub" style="margin-right: 10px">-</button>
    <button @click="addAsync" style="margin-right: 10px">一秒后+1</button>
    <button @click="subAsync">一秒后-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      num: 5
    }
  },
  computed: {
    // 把state中的数据映射到计算数据
    ...mapState(['count']),
  },
  methods: {
    // 把mutations中的方法映射到实例
    ...mapMutations(['less']),
    ...mapActions(['lessAsync']),
    add() {
      // 修改state数据
      this.$store.commit('add', this.num)
    },
    sub() {
      // 调用mutations中的方法
      this.less(2)
    },
    addAsync() {
      this.$store.dispatch('addAsync', 1)
    },
    subAsync() {
      this.lessAsync(1)
    }
  }
}
</script>
