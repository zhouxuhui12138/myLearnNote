const obj = {
  name: 'xz',
  age: 18,
  friend: {
    name: 'yezi'
  },
  foo() {}
}

// 引用赋值
// const info = obj
// obj.age = 666
// console.log(info.age)


// 浅拷贝
// const info = { ...obj }
// obj.name = 'dasdas'
// console.log(info.name)
// obj.friend.name = 'yezizizi'
// console.log(info.friend.name)


// JSON深拷贝 无法拷贝函数
const infoString = JSON.stringify(obj)
const info = JSON.parse(infoString)
console.log(info)
obj.friend.name = 'hahaha'
console.log(info.friend.name)
