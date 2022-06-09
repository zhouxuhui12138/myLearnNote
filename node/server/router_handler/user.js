const db = require("../db/index")
const bcrypt = require("bcryptjs")

exports.register = (req, res) => {
  let { username, password } = req.body

  if (!username || !password) {
    return res.send({ status: 400, msg: "用户名或密码不合法" })
  }

  // 检查用户名是否重复
  const sql1 = "select * from users where username=?"
  db.query(sql1, username, (err, data) => {
    if (err) return err.message

    if (data.length !== 0) {
      return res.send({ status: 400, msg: "此用户名已被注册" })
    }

    // 加密密码
    password = bcrypt.hashSync(password, 10)
    // 插入数据库
    const sql2 = "insert into users set ?"
    db.query(sql2, { username, password }, (err, data) => {
      if (err) return err.message

      // 判断是否成功
      if (data.affectedRows !== 1) {
        return res.send({ status: 400, msg: '注册用户失败' })
      }

      res.send({ status: 200, msg: '注册成功' })
    })
  })

}

exports.login = (req, res) => {
  res.send("login")
}
