// 函数在调用时是一个独立的个体 没有被外界别的方式所调用 就是window

// 1
// function foo1() {
//   console.log(this)
// }

// function foo2() {
//   console.log(this)
//   foo1()
// }

// function foo3() {
//   console.log(this)
//   foo2()
// }
// foo3()


// 2
// function foo() {
//   console.log(this)
// }

// var obj = {
//   name: 'xz',
//   foo: foo
// }

// var bar = obj.foo
// bar()


// 3
// function foo() {
//   function bar() {
//     console.log(this)
//   }
//   bar()

//   return bar
// }

// var fn = foo()
// fn()
