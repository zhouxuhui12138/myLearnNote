const express = require('express')
const router = require('./03_router')
const cors = require('cors')

const app = express()

// 配置接口跨域
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

app.listen(3000, () => {
  console.log('服务器已经启动')
})