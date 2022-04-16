// 1. 忽略显示绑定
// call apply 和 bind在绑定一个undefined或者null时 此时this会指向window
// function fn() {
//   console.log(this)
// }

// fn.apply(null)
// fn.call(undefined)
// var foo = fn.bind(undefined)
// foo()


// 2. 间接函数引用 会被当做独立的函数调用
// function foo() {
//   console.log(this)
// }

// var obj1 = {
//   name: 'obj1',
//   fn: foo
// }

// var obj2 = {
//   name: 'obj2'
// }

// ;(obj2.bar = obj1.fn)()


// 你不知道JavaScript
// function foo(el) {
//   console.log(el, this.id)
// }

// var obj = {
//   id: 'xz'
// }

// ;[1, 2, 3].forEach(foo, obj)