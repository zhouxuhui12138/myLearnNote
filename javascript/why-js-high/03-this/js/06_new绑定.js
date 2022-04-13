// 通过new关键字来调用一个构造函数时 new出来的实例的this指向当前的构造函数

function Person(name, age) {
  this.name = name
  this.age = age
}

var p1 = new Person('张三', 19)
var p2 = new Person('李四', 20)
console.log(p1)
console.log(p2)