const path = require('path')

const path1 = path.basename(path.join(__dirname, './01_path基本使用.js'))
console.log(path1)

// 去掉后缀
const path2 = path.basename(path.join(__dirname, './02_获取文件名.js'), '.js')
console.log(path2)