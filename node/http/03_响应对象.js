const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const { url, method } = req
  const str = `请求方式为${method}, 请求地址为${url}`

  // 解决乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res为响应对象 对客户端做出响应
  res.end(str)
})

server.listen(3600, () => {
  console.log('server is running... http://127.0.0.1:3600')
})