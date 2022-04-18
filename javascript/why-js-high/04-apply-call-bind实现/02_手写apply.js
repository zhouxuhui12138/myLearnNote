Function.prototype.myApply = function (thisArg, args) {
  var fn = this

  // 隐式绑定this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  thisArg.fn = fn
  // 接收函数的返回值
  // if (args) {
  //   var result = thisArg.fn(...args)
  // } else {
  //   var result = thisArg.fn()
  // }
  args = args || []
  var result = thisArg.fn(...args)
  delete thisArg.fn

  return result
}

function sum(num1, num2) {
  console.log(this.name, num1, num2)
  return num1 + num2
}

function bar() {
  console.log(this)
}

var obj = {
  name: "xz",
}

// var result = sum.myApply(obj, [10, 20])
// console.log(result)
bar.myApply(0)
