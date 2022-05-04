const promise = new Promise((resolve, reject) => {
  // 抛出异常也会调用catch
  // throw new Error("error")
  // reject('error')
  resolve()
})

promise
  .then(res => {
    return new Promise((resolve, reject) => {
      reject("error1")
    })
  })
  // 捕获异常
  .catch(err => {
    console.log(err)
    // catch的返回值也会包裹一个promise
    return "catch return"
  })
  .then(res => {
    console.log(res)
  })
