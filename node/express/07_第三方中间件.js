const express = require("express")
const bodyParser = require('body-parser')

const app = express()
// 使用=body-parser中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/user", (req, res) => {
  // 获取josn数据
  console.log(req.body)
  res.send('ok')
})

app.post("/home", (req, res) => {
  // 获取url-encoded数据
  console.log(req.body)
  res.send('ok')
})

app.listen(3000, () => {
  console.log("服务器已经启动")
})
