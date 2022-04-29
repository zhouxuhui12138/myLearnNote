// function foo(x = "aaa", y = "bbb") {
//   console.log(x, y)
// }

// foo()

// // 对象的默认值和解构
// function printInfo({ name, age } = { name: "xz", age: 18 }) {
//   console.log(name, age)
// }

// printInfo()
// printInfo({ name: 'jay', age: 33 })


// 有默认值的参数不算length属性
// function foo(x, y, z = 10) {
//   console.log(x, y, z)
// }

// foo()
// console.log(foo.length)