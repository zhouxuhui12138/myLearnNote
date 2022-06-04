const express = require('express')

const app = express()

app.get('/user', (req, res) => {
  res.send('get')
})

app.post('/user', (req, res) => {
  res.send('post')
})

app.get('/', (req, res) => {
  // 获取query传参 默认是空对象
  console.log(req.query)
  res.send()
})

app.get('/user/:id', (req, res) => {
  // 获取动态参数
  console.log(req.params)
  res.send(req.params)
})

app.listen(80, () => {
  console.log('server is running...')
})