function Person() {

}

// 函数也是一个对象 所以拥有 [[prototype]] 隐式原型
// console.log(Person.__proto__)

// 函数也是一个函数 拥有prototype 显示原型
// console.log(Person.prototype)


// 在通过new关键字来调用Person时
// Person创建出来的对象p1 p2的__proto__(隐式原型)会指向Person函数的显示原型 prototy
const p1 = new Person()
const p2 = new Person()
console.log(p1.__proto__ === Person.prototype)
console.log(p2.__proto__ === Person.prototype)
console.log(p1.__proto__ === p2.__proto__)

Person.prototype.fn = function() {
  console.log(123)
}
p1.fn()
p2.fn()
console.log(p1.fn === p2.fn)

p2.__proto__.age = 18
console.log(Person.prototype)