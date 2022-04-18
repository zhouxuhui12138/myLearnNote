// 给Function的原型上绑定一个myCall函数
Function.prototype.myCall = function(thisArg, ...args) {
  var fn = this
  // 防止用户传入的不是对象类型 转为对象
  // 如果是undefined或者null this应该改为window
  thisArg = thisArg ? Object(thisArg) : window
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  return result
}


function foo(str1, str2) {
  console.log(this)
  return str1 + str2
}

var res = foo.myCall({}, 'bbb', 'ccc')
console.log(res)