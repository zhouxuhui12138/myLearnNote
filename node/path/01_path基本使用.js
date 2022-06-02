const path = require('path')

const path1 = path.join('a', './b', 'c', '/d')
console.log(path1)

const path2 = path.join(__dirname, './01_path基本使用.js')
console.log(path2)