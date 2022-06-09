const db = require("../db/index")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { jwtSecretKey, expiresIn } = require('../config')

exports.register = (req, res) => {
  let { username, password } = req.body

  // 检查用户名是否重复
  const sql1 = "select * from users where username=?"
  db.query(sql1, username, (err, data) => {
    if (err) return res.sendErr(err, 500)

    if (data.length !== 0) {
      return res.sendErr("此用户名已被注册")
    }

    // 加密密码
    password = bcrypt.hashSync(password, 10)
    // 插入数据库
    const sql2 = "insert into users set ?"
    db.query(sql2, { username, password }, (err, data) => {
      if (err) return res.sendErr(err, 500)

      // 判断是否成功
      if (data.affectedRows !== 1) {
        return res.sendErr("注册用户失败")
      }

      res.send({ status: 200, msg: "注册成功" })
    })
  })
}

exports.login = (req, res) => {
  const { username, password } = req.body

  const sql1 = "select * from users where username=?"
  db.query(sql1, username, (err, data) => {
    if (err) return res.sendErr(err, 500)
    // 查询用户名是否存在
    if (data.length === 0) return res.sendErr("用户名或密码错误")
    // 查询密码是否正确
    if (!bcrypt.compareSync(password, data[0].password)) return res.sendErr("用户名或密码错误")

    // 生成token
    const user = { ...data[0], password: '' }
    const token = jwt.sign(user, jwtSecretKey, { expiresIn })

    res.send({
      status: 200,
      msg: '登录成功',
      data: 'Bearer ' + token
    })
  })
}
