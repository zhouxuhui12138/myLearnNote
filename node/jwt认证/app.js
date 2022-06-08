const express = require("express")
// 生成token
const jwt = require("jsonwebtoken")
// 解析token
const { expressjwt } = require("express-jwt")

const app = express()
app.use(express.json())
// 定义密钥 加密token
const secretKey = "xiaozhou-666"
// 全局中间件 把用户携带的token转为json
// unless为哪些前缀的接口不需要解析token
app.use(expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))

app.post("/api/login", (req, res) => {
  // 通过用户名和密钥和有效时间来生成token
  const username = req.body.username
  const token = jwt.sign({ username }, secretKey, { expiresIn: "30s" })

  res.send({
    status: 200,
    msg: "ok",
    data: token
  })
})

app.get('/admin/userinfo', (req, res) => {
  // express-jwt解析出来的用户信息会被自动挂载的req.auth
  res.send({
    status: 200,
    msg: 'ok',
    data: req.auth
  })
})


// 捕获错误的中间件
app.use((err, req, res, next) => {
  // token问题的错误
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      msg: '无效的token',
    })
  }

  // 其他原因的错误
  res.send({
    status: 500,
    data: err.message
  })
})

app.listen(3000, () => {
  console.log("服务器开启成功")
})
