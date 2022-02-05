import { createStore } from "vuex"
import createPersistedstate from 'vuex-persistedstate'

import users from "./modules/users"
import cart from "./modules/cart"
import category from "./modules/category"

export default createStore({
  modules: {
    users,
    cart,
    category
  },
  // 配置插件
  plugins: [
    createPersistedstate({
      key: 'xiaotuxian',
      paths: ['users', 'cart']
    })
  ]
})
