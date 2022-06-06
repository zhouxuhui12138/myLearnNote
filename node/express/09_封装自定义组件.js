module.exports = function bodyParser(req, res, next) {
  let str = ""

  // 监听每一次body数据的传输
  req.on("data", chunk => {
    str = str + chunk
  })

  // 监听传输完成后的数据
  req.on("end", () => {
    // 将字符串转为对象
    if (str.includes("{")) {
      req.body = JSON.parse(str)
      next()
    } else {
      let obj = {}
      const strArr = str.split("&")
      strArr.forEach(item => {
        const data = item.split("=")
        obj[data[0]] = data[1]
      })

      req.body = obj
      next()
    }
  })
}