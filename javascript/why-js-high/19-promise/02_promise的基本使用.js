// const promise = new Promise(() => {})
// console.log(promise.__proto__ === Promise.prototype)

function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "yezi") {
        const res = "成功了"
        resolve(res)
      } else {
        const errMessage = "失败了"
        reject(errMessage)
      }
    }, 3000)
  })
}

request("yezi")
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
