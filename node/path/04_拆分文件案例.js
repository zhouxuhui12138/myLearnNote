const fs = require("fs")
const path = require("path")

// 匹配html中的模块
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 匹配逻辑
function resovleCss(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  // 去除style标签
  const css = r1[0].replace("<style>", "").replace("</style>", "")
  // 写入文件
  fs.writeFile(path.join(__dirname, "./data/案例/index.css"), css, err => {
    if (err) return console.log(err)
    console.log("写入css成功")
  })
}

function resovleJs(htmlStr) {
  const r1 = regScript.exec(htmlStr)
  // 去除style标签
  const js = r1[0].replace("<script>", "").replace("</script>", "")
  // 写入文件
  fs.writeFile(path.join(__dirname, "./data/案例/index.js"), js, err => {
    if (err) return console.log(err)
    console.log("写入js成功")
  })
}

function resovleHtml(htmlStr) {
  // 去除style和script标签 并引入提取出来的js和css文件
  const html = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, '<script src="./index.js"></script>')

  // 写入文件
  fs.writeFile(path.join(__dirname, "./data/案例/index.html"), html, err => {
    if (err) return console.log(err)
    console.log("写入html成功")
  })
}

// 读取html
fs.readFile(path.join(__dirname, "./data/index.html"), "utf-8", (err, htmlString) => {
  if (err) return console.log(err)

  resovleCss(htmlString)
  resovleJs(htmlString)
  resovleHtml(htmlString)
})
