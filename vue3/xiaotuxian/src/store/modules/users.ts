// 用户信息
export interface Iprofile {
  id: string
  avatar: string
  nickname: string
  account: string
  mobile: string
  token: string
}

// 用户模块
export default {
  namespaced: true,
  // 模块的state要写成函数
  state() {
    return {
      profile: <Iprofile>{
        id: "",
        avatar: "",
        nickname: "",
        account: "",
        mobile: "",
        token: ""
      }
    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUser(state: any, payload: any) {
      state.profile = payload
    },
    login(state: any, payload: any) {
      state.profile.token = payload
    }
  }
}
