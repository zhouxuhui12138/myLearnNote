const fs = require("fs")
const path = require("path")
const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
  const url = req.url

  let fpath = ""
  if (url === "/") {
    fpath = path.join(__dirname, "./assets/index.html")
  } else {
    fpath = path.join(__dirname, "./assets", url)
  }

  fs.readFile(fpath, "utf-8", (err, data) => {
    if (err) res.end("<h1>404</h1>")

    res.end(data)
  })
})

server.listen(80, () => {
  console.log("server run http://127.0.0.1")
})
