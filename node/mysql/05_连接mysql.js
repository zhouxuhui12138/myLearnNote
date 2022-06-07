const mysql = require("mysql")

// 连接mysql的配置对象
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  database: "db_test_01",
})

// 查看是否完成连接
const query = "select * from users"
db.query(query, (err, res) => {
  if (err) return console.log(err)
  console.log(res)
})
