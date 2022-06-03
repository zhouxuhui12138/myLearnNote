const http = require('http')

const server = http.createServer()

// 给服务器绑定request事件 监听客户端的请求
server.on('request', (req, res) => {
  console.log('服务器被访问了')
})

server.listen(3600, () => {
  console.log('server is running... http://127.0.0.1:3600')
})