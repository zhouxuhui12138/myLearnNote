function sum(num1, num2, fn) {
  console.log(fn(num1, num2))
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

var a = 30
var b = 20

sum(a, b, add)
sum(a, b, sub)