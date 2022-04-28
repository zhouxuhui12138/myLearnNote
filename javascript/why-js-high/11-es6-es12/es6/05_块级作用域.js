// es6开始才有块级作用域
// const/let/class拥有块级作用域

if (true) {
  const a = 1
  let b = 2
  var c = 3
  class Person {}
}

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(Person)