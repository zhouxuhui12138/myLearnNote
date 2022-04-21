"use strict";

// 不允许函数有相同的参数
// function foo(a, a) {
//   console.log(a, a)
// }

// foo(10, 20)


// 不允许意外创建全局变量
// function foo() {
//   age = 18
// }
// foo()
// console.log(age)


// 静默错误
// undefined = 111


// with语句不允许使用


// 严格模式下的this
// 在严格模式下 自执行函数（默认绑定） this执行的是undefined
// function foo() {
//   console.log(this)
// }
// foo()

// var obj = {
//   fn: foo
// }
// obj.fn()


function fn() {
  setTimeout(() => {
    console.log(this)
  }, 100)
}

var obj = {
  name: 'xz',
  fn
}

fn()
obj.fn()