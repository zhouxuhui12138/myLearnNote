const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
  const { url } = req
  let content = "<h1>404</h1>"

  if (url === "/" || url === "/index.html") {
    content = "<h1>index</h1>"
  } else if (url === "/about") {
    content = "<h1>about</h1>"
  } else if (url === "/login") {
    content = "<h1>login</h1>"
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.end(content)
})

server.listen(3600, () => {
  console.log("server is running... http://127.0.0.1:3600")
})
