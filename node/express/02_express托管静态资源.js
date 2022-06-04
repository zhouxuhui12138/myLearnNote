const express = require('express')

const app = express()

// 参数1访问前缀 参数2需要托管的目录
app.use('/public', express.static('./data'))

app.listen(3000, () => {
  console.log('服务器已经启动')
})