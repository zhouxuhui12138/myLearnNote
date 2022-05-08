function requestData() {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle(222)
    }, 2000)
  })
}

async function foo() {
  await requestData()

  // 后续代码会等到await执行完毕后执行
  console.log(111)
  console.log(222)
  console.log(333)
}
foo()