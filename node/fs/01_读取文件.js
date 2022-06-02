const fs = require('fs')

// 读取文件
fs.readFile('./data/1.txt', 'utf-8', (err, res) => {
  // 判断是否失败
  if (err) {
    return console.log(`文件读取失败${err.message}`)
  }

  console.log(res)
})
