const promise = new Promise((resolve, reject) => {
  // resolve()
  reject()
})

promise
  .then(() => {})
  .catch(() => {})
  // finally不接收参数
  // 无论promise调用resolve或者reject finally都会被执行
  .finally(() => {
    console.log("finally")
  })
