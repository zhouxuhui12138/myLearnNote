// function foo() {
//   return () => {
//     console.log(this)
//     // 箭头函数中没有arguments 在这能拿到是因为父级作用域中有arguments
//     console.log(arguments)
//   }
// }

// var fn = foo(1, 2, 3)

// fn()

// 剩余参数可以代替arguments
function bar(n1, n2, ...args) {
  console.log(args)
}

bar(1, 2, 3, 45, 55)
