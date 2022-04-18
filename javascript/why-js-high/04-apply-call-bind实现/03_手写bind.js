Function.prototype.myBind = function (thisArg, ...args) {
  var fn = this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  return function (...cbArgs) {
    thisArg.fn = fn
    var finalArgs = [...args, ...cbArgs]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    return result
  }
}

function sum(num1, num2, num3) {
  console.log(this)
  return num1 + num2 + num3
}

var newSum = sum.myBind({}, 10, 20)
var result = newSum(30)
console.log(result)
