import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 公共数据源
  state: {
    count: 0
  },
  // 修改state数据
  mutations: {
    // 第一个参数为当前state 第二个参数则是传过来的参数
    add(state, payload) {
      state.count += payload
    },
    less(state, payload) {
      state.count -= payload
    },
  },
  // 异步任务用action
  actions: {
    addAsync(context, payload) {
      setTimeout(() => {
        context.commit('add', payload)
      }, 1000)
    },
    lessAsync(context, payload) {
      setTimeout(() => {
        context.commit('less', payload)
      }, 1000)
    },
  },
  // 类似计算属性 能够不修改state的前提下加工生成新的数据
  getters: {
    countProMax(state) {
      return `count的值为${state.count * 10}`
    }
  }
})
