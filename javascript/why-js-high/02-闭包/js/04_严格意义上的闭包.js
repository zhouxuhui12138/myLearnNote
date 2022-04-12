// foo执行完成应该销毁
function foo() {
  var name = 'xz'
  
  return function bar() {
    // 但是bar中使用到了foo中的name自由变量 此时name并不会销毁 便产生了闭包
    console.log('bar', name)
  }
}

var fn = foo()
fn()

var uname = 'why'
function demo() {
  // 也是一个闭包 因为在一个函数内访问外部作用域的一个变量
  console.log(uname)
}