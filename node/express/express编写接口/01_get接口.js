const express = require('express')
const router = require('./01_router')

const app = express()

app.use('/api', router)

app.listen(3000, () => {
  console.log('服务器已经启动')
})