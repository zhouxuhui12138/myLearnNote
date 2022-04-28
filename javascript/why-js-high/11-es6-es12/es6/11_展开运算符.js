// const names = ['xz', 'jay', 'yezi']
// const name = 'nba'

// // 构建函数时使用
// function foo(x, y, z) {
//   console.log(x, y, z)
// }

// foo(...names)
// foo(...name)


// // 构建数组时
// const arr = [...names, name]
// console.log(arr)


// // 展开对象(es8)
// const obj = {
//   name: 'xz',
//   age: 18
// }

// const info = { ...obj, address: '洛阳' }
// console.log(info)


// 展开运算符是进行浅拷贝
const obj = {
  name: 'xz',
  friend: {
    name: 'yezi',
    age: 18
  }
}

const info = { ...obj, address: '洛阳' }
obj.friend.age = 19
console.log(info)