// class声明出来的类实际上是构造函数创建的类的语法糖
class Person {
  
}

const p1 = new Person()
console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(p1.__proto__ === Person.prototype)