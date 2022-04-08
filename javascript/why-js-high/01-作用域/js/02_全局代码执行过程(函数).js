var age = 18


/**
 * 为什么函数可以在声明前调用
 * => 因为js编译器在发现一个函数后 会在先内存开辟一个地址来存放这个函数 
 */
foo(123)
function foo(num) {
  console.log(a)
  var a = 10
  var b = 20
  console.log("foo")
}


