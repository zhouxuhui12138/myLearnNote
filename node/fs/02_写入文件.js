const fs = require('fs')

// 写入
fs.writeFile('./data/2.txt', 'Hello World', (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('文件写入成功！')
})