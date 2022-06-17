const db = require("../db/index")
const bcrypt = require("bcryptjs")

// 获取用户信息
exports.getUserInfoHandler = (req, res) => {
  const sql = "select id, username, email, user_pic, nickname from users where id=?"
  db.query(sql, req.auth.id, (err, data) => {
    if (err) return res.sendErr(err, 500)

    if (data.length !== 1) return res.sendErr("获取用户信息失败")

    res.send({
      status: 200,
      msg: "获取用户信息成功",
      data: data[0],
    })
  })
}

// 更新用户信息
exports.updateUserInfoHandler = (req, res) => {
  const sql = "update users set ? where id=?"
  db.query(sql, [req.body, req.body.id], (err, data) => {
    if (err) return res.sendErr(err, 500)
    if (data.affectedRows !== 1) return res.sendErr("更新用户信息失败")

    res.send({
      status: 200,
      msg: "更新用户信息成功",
    })
  })
}

// 重置密码
exports.updateUserPassword = (req, res) => {
  // 查询用户是否存在
  const sql = "select * from users where id=?"
  db.query(sql, req.auth.id, (err, data) => {
    if (err) return res.sendErr(err, 500)
    if (!data[0].id) return res.sendErr("用户不存在")

    // 判断用户的旧密码是否和数据库的一致
    let { oldPwd, newPwd } = req.body
    if (!bcrypt.compareSync(oldPwd, data[0].password)) return res.sendErr("原密码不正确")

    // 设置新密码并存储到数据库
    const sql = "update users set password=? where id=?"
    newPwd = bcrypt.hashSync(newPwd, 10)
    db.query(sql, [newPwd, req.auth.id], (err, data) => {
      if (err) return res.sendErr(err, 500)
      if (data.affectedRows !== 1) return res.sendErr('更新密码失败')

      res.send({
        status: 200,
        msg: '更新密码成功'
      })
    })
  })
}

// 重置头像
exports.updateAvatar = (req, res) => {
  const sql = "update users set user_pic=? where id=?"
  db.query(sql, [req.body.avatar, req.auth.id], (err, data) => {
    if (err) return res.sendErr(err, 500)
    if (data.affectedRows !== 1) return res.sendErr('更新头像失败')

    res.send({
      status: 200,
      msg: '更新头像成功'
    })
  })
}