const express = require("express")

const app = express()

// 解析客户端传过来的json数据
app.use(express.json())
// 解析客户端传过来的url-encoded数据
app.use(express.urlencoded({ extended: false }))

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
