const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // req为请求对象 包含客户端的数据和属性
  const { url, method } = req
  console.log(`请求方式为${method}, 请求地址为${url}`)
})

server.listen(3600, () => {
  console.log('server is running... http://127.0.0.1:3600')
})