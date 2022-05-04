/**
 * es6之前 是用回调函数来拿到返回值的
 */
function request(url, successFn, errFn) {
  setTimeout(() => {
    if (url === "yezi") {
      const res = "成功了"
      successFn(res)
    } else {
      const errMessage = "失败了"
      errFn(errMessage)
    }
  }, 3000)
}

request(
  "yezi",
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
