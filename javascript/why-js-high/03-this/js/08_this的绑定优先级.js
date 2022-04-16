// 1.默认绑定的优先级是最低的


// 2.显示绑定高于隐式绑定
// var obj = {
//   name: 'xz',
//   fn() {
//     console.log(this)
//   }
// }

// obj.fn()
// obj.fn.apply('aaa')

// bind
// function bar() {
//   console.log(this)
// }

// var obj = {
//   name: 'obj',
//   fn: bar.bind('aaa')
// }
// // 可以看出 显示绑定是高于隐式绑定的
// obj.fn()


// 3. new绑定高于隐式绑定
// var obj = {
//   name: 'xz',
//   bar: function() {
//     console.log(this)
//   }
// }

// var f = new obj.bar()


// 4. new关键字不能和apply和call一起使用
// new关键字的绑定优先级比bind更高
// function foo() {
//   this.name = 'foo'
//   console.log(this)
// }

// var obj = {
//   name: 'xz',
//   fn: foo.bind('aaa')
// }

// var f = new obj.fn()


// new绑定 > 显示绑定 > 隐式绑定 > 默认绑定