const info = {
  name: 'xz',
  age: 18,
  friend: ['yezi']
}

// 将对象转为JSON字符串
const infoString = JSON.stringify(info)

// 如果将一个对象直接存储到localStorage 会出现bug 
localStorage.setItem('info', infoString)
console.log(localStorage.getItem('info'))

// 将JSON解析为对象
const obj = JSON.parse(localStorage.getItem('info'))
console.log(obj)