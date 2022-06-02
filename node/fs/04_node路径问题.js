const fs = require('fs')

// 代码执行时 node会以当前所处的目录 动态拼接出来完整的路径
// C:\Users\周旭辉\Desktop\前端\myLearnNote\node\fs> node .\04_node路径问题.js  成功
// C:\Users\周旭辉\Desktop\前端\myLearnNote\node> node .\fs\04_node路径问题.js  失败

// fs.readFile('./data/1.txt', 'utf-8', (err, res) => {
//   if (err) {
//     return console.log(err)
//   }

//   console.log(res)
// })

// __dirname当前文件所处的目录
console.log(__dirname)

// 解决方法
fs.readFile(__dirname + '/data/1.txt', 'utf-8', (err, res) => {
  if (err) { 
    return console.log(err)
  }

  console.log(res)
})