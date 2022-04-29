// Symbol可以生成一个独一无二的值 防止命名冲突
const s1 = Symbol()
const s2 = Symbol()

// Symbol也可以传入描述
const s3 = Symbol('s3')
// console.log(s3.description)


// 定义对象字面量时使用
const obj = {
  [s1]: 111,
  [s2]: 222
}

// 添加
obj[s3] = 333

// 访问
// console.log(obj[s1])
// console.log(obj[s2])
// console.log(obj[s3])

// 不能通过.语法来获取 obj.s1 // error 


// 遍历
// 获取所有的key
// const symbolKeys = Object.getOwnPropertySymbols(obj)
// console.log(symbolKeys)
// for (const key of symbolKeys) {
//   console.log(obj[key])
// }


// 创建两个一样的symbol
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')

console.log(sa === sb)
// 获取symbol的key
const key = Symbol.keyFor(sa)
console.log(key)