function requestData() {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle(222)
    }, 2000)
  })
}

async function foo() {
  await requestData()

  // 上面的await执行完成后才会执行如下代码
  console.log(222)
  console.log(315)
  console.log(123)
}
foo()