function double(num) {
  return num * 2
}

function square(num) {
  return num * num
}

function combination(fn1, fn2) {
  return function(count) {
    return fn1(fn2(count))
  }
}

var fn = combination(square, double)
console.log(fn(10))