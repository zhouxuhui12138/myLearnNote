// const和let声明的变量没有作用域提升
// console.log(foo)
// var foo = '123'

// console.log(bar)
// const bar = '234'


// var声明一个变量时会被保存到window里 let/const则不会
var foo = 123
window.foo = 456
console.log(foo)

let bar = 'bar'
console.log(window.bar)