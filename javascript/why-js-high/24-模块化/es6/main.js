// 接收单个导出
import { name, age } from './a.js'
// 接收默认导出 可以重命名
import sum from './b.js'
// 直接导入并且执行
import './c.js'

console.log(name, age)
console.log(sum(1, 2))