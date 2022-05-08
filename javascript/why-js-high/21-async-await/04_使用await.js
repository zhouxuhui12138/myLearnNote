function requestData() {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle(222)
    }, 2000)
  })
}

async function foo() {
  const res = await requestData()
  console.log(123)
}
foo()