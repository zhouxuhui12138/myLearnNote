// 1. 什么是原型
// // 每一个对象都有一个 [[prototype]], 这个属性可以称为对象原型(隐式原型)
const obj = { name: 'xz' }

// // 早期ECMA没有规范如何查看 [[prototype]] 部分浏览器给我们提供了一个属性可以查看
// console.log(obj.__proto__)

// // es6之后也提供了一个方法供我们查看
// console.log(Object.getPrototypeOf(obj))


// 2. 原型有什么用
/**
 * 如果在对象中查找一个属性
 * 对象本身有 则会使用
 * 对象本身没有找到 则会去 [[prototype]] 中查找
 */
obj.__proto__.age = 999
console.log(obj.age)
