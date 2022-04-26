const obj = {
  name: 'xz',
  age: 18
}

// 需求 创建出一个新的对象 新的对象的原型指向obj
// 方法1
// function createObject1(o) {
//   const newObj = {}
//   Object.setPrototypeOf(newObj, o)
//   return newObj
// }

// 方法2
// function createObject2(o) {
//   function Fn () {}
//   Fn.prototype = o
//   return new Fn()
// }


// 上面两个方法的语法糖
const info = Object.create(obj)
console.log(info)
console.log(info.name)
console.log(info.__proto__)

