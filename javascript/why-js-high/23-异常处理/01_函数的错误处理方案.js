function sum(num1, num2) {
  // 如果函数调用者传过来的不是一个数字类型 应该告知调用者一个错误
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // 抛出错误 后续代码不会执行
    throw 'params is error type...'
  }

  return num1 + num2
}

console.log(sum(true, [1, 3, 5]))
// console.log(sum(10, 20))