function foo() {

}

// foo的prototype上还有一个 constructor函数 constructor函数又指向foo本身
// console.log(foo.prototype.constructor === foo)
// console.log(foo.prototype.constructor.prototype.constructor.prototype.constructor)
// console.log(foo.prototype.constructor.name)


// 重写foo的prototype
foo.prototype = {
  name: 'xz',
  age: 18,
  constructor: foo
}

const f1 = new foo()
console.log(f1.__proto__)