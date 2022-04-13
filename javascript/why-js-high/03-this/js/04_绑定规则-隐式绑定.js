// var msg = 'hello'

// function foo() {
//   console.log(this.msg)
// }

// var obj = {
//   msg: 'hi',
//   foo: foo
// }

// foo() // hello
// obj.foo() // hi
// var fn = obj.foo
// fn() // hello






function foo() {
  console.log(this)
}

var obj1 = {
  name: 'obj1',
  fn: foo
}

var obj2 = {
  name: 'obj2',
  fn: obj1.fn
}

obj2.fn()