const express = require('express')
const router = require('./02_router')

const app = express()

app.use(express.json())

app.use('/api', router)

app.listen(3000, () => {
  console.log('服务器已经启动')
})