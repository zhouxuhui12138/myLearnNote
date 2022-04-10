function foo() {
  // a是找不到的 b可以找到
  // 因为浏览器解析 var a = b = 100会解析成这样子
  // => var a = 10 b = 10
  var a = b = 100
}

foo()

console.log(b)
console.log(a)

