var a = 100

function foo() {
  console.log(a) // undefined
  return

  // 变量会提升
  var a = 100
}

foo()