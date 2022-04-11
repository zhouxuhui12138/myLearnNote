function makeAdder(count) {
  return function(num) {
    return num + count
  }
}

var add10 = makeAdder(10)
console.log(add10(5))
console.log(add10(10))

var add1 = makeAdder(1)
console.log(add1(1))
console.log(add1(4))