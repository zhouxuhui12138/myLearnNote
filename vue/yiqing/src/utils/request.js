import axiox from 'axios'

const baseURL = 'http://api.tianapi.com'

const request = axiox.create({
  baseURL
})

export default request
