import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/common.css'

import '@/utils/day'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
