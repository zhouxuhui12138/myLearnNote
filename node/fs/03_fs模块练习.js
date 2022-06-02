const fs = require("fs")

fs.readFile("./data/3成绩.txt", "utf-8", (err, res) => {
  if (err) return console.log("读取文件失败")

  // 分割成绩
  const arr = res.split(" ")
  // 处理成绩
  const newArr = []
  arr.forEach((item, index) => {
    item = index + 1 + " " + item
    // 把等号替换成冒号
    newArr.push(item.replace('=', ':'))
  })
  // 把数组转为str并且换行
  const str = newArr.join('\n')

  // 写入
  fs.writeFile('./data/3成绩ok.txt', str, (err) => {
    if (err) return console.log('成绩写入失败')

    console.log('成绩写入成功')
  })
})
