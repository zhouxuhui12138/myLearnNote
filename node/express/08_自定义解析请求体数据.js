const express = require("express")
const qs = require("querystring")
const bodyParser = require('./09_封装自定义组件')

const app = express()

// 自定义中间件
app.use(bodyParser)

app.post("/user", (req, res) => {
  res.send(req.body)
})

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(3000, () => {
  console.log("服务器已经启动")
})
