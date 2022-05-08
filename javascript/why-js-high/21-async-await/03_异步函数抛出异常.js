async function foo() {
  console.log('start')

  // 异步函数中抛出的异常会直接被当作reject return出去
  throw new Error('err')

  console.log('end')
}

foo().catch(err => err)
console.log('----')