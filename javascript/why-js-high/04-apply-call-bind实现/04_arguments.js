function foo(a, b) {
  // arguments 类数组 本质是一个对象
  // console.log(arguments instanceof Object) // true
  // arguments用来存储函数中的参数

  // 获取参数的长度
  console.log(arguments.length)

  // 获取某一个参数
  console.log(arguments[4])

  // 获取当前参数的函数
  console.log(arguments.callee)
}

foo(1, 2, 3, 4, 5)