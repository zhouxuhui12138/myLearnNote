const express = require("express")

const app = express()


app.get("/", (req, res) => {
  throw new Error('服务器炸了')
})

// 错误中间件必须放在所有路由之后
app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(3000, () => {
  console.log("服务器已经启动")
})
