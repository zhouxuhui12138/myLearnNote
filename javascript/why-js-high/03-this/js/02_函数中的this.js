// 函数中的this是动态的 只有在函数被执行的时候 根据函数调用时所处的位置和调用的方法来决定的

function foo() {
  console.log(this)
}

foo() // window

var obj = {
  name: 'xz',
  foo: foo
}

obj.foo() // obj

var uname = 'xz'
foo.apply(uname) // name