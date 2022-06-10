const db = require("../db/index")

exports.getUserInfoHandler = (req, res) => {
  const sql = "select id, username, email, user_pic, nickname from users where id=?"
  db.query(sql, req.auth.id, (err, data) => {
    if (err) return res.sendErr(err, 500)

    if (data.length !== 1) return res.sendErr("获取用户信息失败", 500)

    res.send({
      status: 200,
      msg: "ok",
      data: data[0],
    })
  })
}

exports.updateUserInfoHandler = (req, res) => {
  const sql = "update users set ? where id=?"
  db.query(sql, [req.body, req.body.id], (err, data) => {
    if (err) return res.sendErr(err, 500)
    if (data.affectedRows !== 1) return res.sendErr('更新用户信息失败')

    res.send({
      status: 200,
      msg: "ok",
    })
  })
}
