// const obj = {
//   name: 'xz',
//   age: 19
// }

// // 阻止对对象添加新的属性
// Object.preventExtensions(obj)
// obj.height = 1.88
// console.log(obj)

// // 让对象的属性不可配置
// Object.seal(obj)
// delete obj.name
// console.log(obj)

// // 让对象的属性不可修改
// Object.freeze(obj)
// obj.name = '123'
// console.log(obj)


const obj = {
  name: 'xz',
  age: 19
}

// Object.keys
const keys = Object.keys(obj)
console.log(keys)

// Object.keys.forEach
Object.keys(obj).forEach(key => {
  console.log(key, obj[key])
})