const promise = new Promise((resolve, reject) => {
  resolve()
})

promise
  .then(res => {
    // promise的then方法也有返回值
    // 他的返回值是一个新的promise
    return "aaa"
  })
  .then(res => {
    console.log(res)
    return "bbb"
  })
  .then(res => {
    console.log(res)
    return new Promise((resolve, reject) => {
      resolve("ccc")
    })
  })
  .then(res => {
    console.log(res)
  })
