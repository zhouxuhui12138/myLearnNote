const mysql = require("mysql")

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  database: "db_test_01",
})

// 增
// const user = { username: "xzzz", password: "123456" }
// const { username, password } = user
// // sql语句中 ?代表占位符
// const sqlStr = "insert into users (username, password) values (?,?)"
// // 插入数据 数组中为?占位符提供数据
// db.query(sqlStr, [username, password], (err, res) => {
//   if (err) return console.log(err)

//   if (res.affectedRows === 1) {
//     console.log("插入成功")
//   }
// })

// const user = { username: "hahahaddd", password: "123456" }
// // 如果插入的数据和数据表里面的字段对应 可采取简写
// const sqlStr = "insert into users set ?"
// db.query(sqlStr, user, (err, res) => {
//   if (err) return console.log(err)

//   if (res.affectedRows === 1) {
//     console.log("插入成功")
//   }
// })

// 改
// const sqlStr = "update users set username=?, password=? where id=?"
// db.query(sqlStr, ["xiaozhou", "zxh0451", 15], (err, res) => {
//   if (err) return console.log(err.message)

//   if (res.affectedRows === 1) {
//     console.log("更新成功")
//   }
// })

// 如果插入的数据和数据表里面的字段对应 可采取简写
// const user = { id: 18, username: 'test1', password: 'test', status: 1 }
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, res) => {
//   if (err) return console.log(err.message)

//   if (res.affectedRows === 1) {
//     console.log("更新成功")
//   }
// })

// 删
// const sqlStr = "delete from users where id=?"
// db.query(sqlStr, 5, (err, res) => {
//   if (err) return console.log(err.message)

//   if (res.affectedRows === 1) {
//     console.log("删除成功")
//   }
// })


// 直接删除数据无法恢复 推荐使用标记删除 设置状态
const sqlStr = 'update users set is_delete=? where id=?'
db.query(sqlStr, [1, 18], (err, res) => {
  if (err) return console.log(err.message)

  if (res.affectedRows === 1) {
    console.log("删除成功")
  }
})
