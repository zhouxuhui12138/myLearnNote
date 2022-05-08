// async修饰的函数会返回一个Promise
async function foo() {
  // return 'aaa'
  return new Promise((resovle, reject) => {
    resovle('bbb')
  })
}

foo().then(res => {
  console.log(res)
})