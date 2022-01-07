import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const Mylist = [
  {
    id: 0,
    info: "Racing car sprays burning fuel into crowd.",
    done: true
  },
  {
    id: 1,
    info: " Japanese princess to wed commoner.",
    done: false
  },
  {
    id: 2,
    info: "Australian walks 100km after outback crash.",
    done: false
  },
  {
    id: 3,
    info: "Man charged over missing wedding girl.",
    done: true
  },
  {
    id: 4,
    info: "Los Angeles battles huge wildfires.",
    done: false
  }
]

export default new Vuex.Store({
  state: {
    list: Mylist,
    inputVal: "",
    viewKey: 'all'
  },
  mutations: {
    setInputVal(state, payload) {
      state.inputVal = payload
    },
    addList(state) {
      let id = null
      if (state.list.length === 0) {
        id = 0
      } else {
        id = state.list[state.list.length - 1].id++
      }
      const obj = {
        id,
        info: state.inputVal,
        done: false
      }
      state.list.unshift(obj)
      state.inputVal = ""
    },
    removeItem(state, id) {
      const index = state.list.findIndex(item => item.id === id)
      state.list.splice(index, 1)
    },
    editCheck(state, payload) {
      const index = state.list.findIndex(item => item.id === payload.id)
      state.list[index].done = payload.done
    },
    clearDone(state) {
      state.list = state.list.filter(item => item.done === false)
    },
    changeViewKey(state, key) {
      state.viewKey = key
    },
  },
  getters: {
    unDoneLength(state) {
      return state.list.filter(item => item.done === false).length
    },
    infoList(state) {
      if (state.viewKey === 'all') {
        return state.list
      }
      if (state.viewKey === 'undone') {
        return state.list.filter(item => item.done === false)
      }
      if (state.viewKey === 'done') {
        return state.list.filter(item => item.done === true)
      }
      return state.list
    }
  }
})
