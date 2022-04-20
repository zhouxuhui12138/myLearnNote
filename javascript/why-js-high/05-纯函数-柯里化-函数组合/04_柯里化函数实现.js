/**
 * @description: 把普通函数转为柯里化后的函数
 * @param {Function} fn
 */
function currying(fn) {
  function curried(...arg1) {
    // 判断用户传入的参数是否和函数需要的参数相等
    if (fn.length <= arg1.length) {
      // 调用函数
      return fn.apply(this, arg1)
    } else {
      return function(...arg2) {
        // 合并参数后递归调用
        return curried.apply(this, [...arg1, ...arg2])
      }
    }
  }

  return curried
}

function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4
}

var curriedSum = currying(sum)
var res = curriedSum(10)(20)(30)(40)
console.log(res)