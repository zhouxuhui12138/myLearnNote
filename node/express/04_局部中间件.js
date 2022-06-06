const express = require("express")

const app = express()

const middleWare1 = (req, res, next) => {
  console.log("我只会在home中生效")
  next()
}

const middleWare2 = (req, res, next) => {
  console.log("我是第二个中间件 我也只会在home生效")
  next()
}

app.get("/home", [middleWare1, middleWare2], (req, res) => {
  res.send("/home")
})

app.get("/login", (req, res) => {
  res.send("/login")
})

app.listen(3000, () => {
  console.log("服务器已经启动")
})