const express = require('express')

const app = express()

// 定义一个全局的中间件
app.use((req, res, next) => {
  // 多个中间件直接 共享req或者res的值
  req.time = Date.now()

  // 进行下一个中间件或者路由
  next()
})

app.get('/', (req, res) => {
  res.send('home, ' + req.time)
})

app.get('/page', (req, res) => {
  res.send('page, ' + req.time)
})

app.listen(3000, () => {
  console.log('服务器已经启动')
})