var message = "window"

function foo() {
  console.log(message)
}

function bar() {
  var message = "bar"
  foo()
}

bar()

function demo() {
  // var在函数内拥有自己的作用域
  var a = 10
  // 不声明直接赋值则是全局作用域
  b = 20
}
demo()

console.log(b)
console.log(a)
