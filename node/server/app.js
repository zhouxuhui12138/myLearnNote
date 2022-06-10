const express = require("express")
const cors = require("cors")
const joi = require("joi")
const { expressjwt } = require("express-jwt")
const { jwtSecretKey } = require("./config")

const userRouter = require("./router/user")
const userInfoRouter = require('./router/user_info')


const app = express()

app.use((req, res, next) => {
  res.sendErr = (err, status = 400) => {
    res.send({
      status,
      msg: err instanceof Error ? err.message : err,
    })
  }

  next()
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(expressjwt({ secret: jwtSecretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))

app.use("/api", userRouter)
app.use('/my', userInfoRouter)

app.use((err, req, res, next) => {
  // token过期或者无效
  if (err.name === "UnauthorizedError") return res.sendErr('无效的token')

  // 验证失败的错误
  if (err instanceof joi.ValidationError) {
    return res.sendErr(err)
  }

  // 其他错误
  res.sendErr(err)
})

app.listen(3000, () => {
  console.log("server is running...")
})
