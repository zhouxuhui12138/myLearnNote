// 柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术

// 普通函数
function sum1(a, b, c) {
  return a + b + c
}
var res1 = sum1(10, 20, 30)
console.log(res1)

// 柯里化后的函数
function sum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
var res2 = sum2(10)(20)(30)
console.log(res2)

// 柯里化简化后
var sum3 = a => b => c => {
  return a + b + c
}
var res3 = sum3(10)(20)(30)
console.log(res3)