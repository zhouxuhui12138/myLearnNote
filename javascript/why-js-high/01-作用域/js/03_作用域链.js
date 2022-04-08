var age = 18

foo()
function foo() {
  var a = 10
  var b = 20
  
  function bar() {
    console.log(age)
  }

  bar()
}

/**
 * 作用域链
 * => 如果在当前作用域下 没有找到所需要的变量 则会一层一层向上查找 找到则使用
 * => 直到查找到window顶级对象还没找到 则报错
 */