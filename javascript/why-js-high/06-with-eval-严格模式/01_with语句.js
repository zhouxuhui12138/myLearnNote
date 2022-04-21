// with可以形成自己的作用域 在严格模式下使用会直接报错
var age = 18
var obj = { age: 111 }

function foo() {
  function bar() {
    // 使用到了obj的作用域 没有使用全局
    with(obj) {
      console.log(age)
    }
  }

  bar()
}

foo()