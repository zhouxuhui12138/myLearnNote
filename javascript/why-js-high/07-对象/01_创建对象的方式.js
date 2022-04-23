// new 关键词创建
var car = new Object()
car.name = 'Toyota'
car.color = "red"
car.fn = function() {
  console.log('run')
}

// 字面量创建
var person = {
  name: 'xz',
  age: 18,
  fn() {
    console.log('eat')
  }
}