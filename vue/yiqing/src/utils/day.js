import Vue from 'vue'
import dayjs from "dayjs"

Vue.filter('formatData', val => {
  return dayjs(val).format('YYYY-MM-DD HH:MM')
})
