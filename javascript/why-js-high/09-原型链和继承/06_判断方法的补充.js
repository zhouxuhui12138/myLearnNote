const obj = {
  name: 'xz',
  age: 18
}

// 给info添加一个自身的属性并改变自己的原型为obj
const info = Object.create(obj, {
  address: {
    enumerable: true,
    value: '洛阳',
    writable: true,
    configurable: true
  }
})

// 判断属性是属于自身还是原型
// console.log(info.hasOwnProperty('address')) // true
// console.log(info.hasOwnProperty('name')) // false

// in操作符 不管属性来自自身还是原型 只要有都返回true
// console.log('address' in info)
// console.log('name' in info)

// // for in遍历对象的key
// for (const key in info) {
//   console.log(key)
// }

// instanceof