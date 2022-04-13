// function foo() {
//   console.log(this)
// }

// var obj = {
//   name: 'obj'
// }

// // 通过call和apply可以手动的修改this的指向
// var that = this
// foo.apply(that)
// foo.apply(obj)


// call和apply的传参方式有区别
// var sum = function (n1, n2) {
//   console.log(n1 + n2, this)
// }

// sum.call('apply', 10, 20)
// sum.apply('call', [10, 20])


// bind手动修改this 但是不会立即执行 返回值是一个经过修改this的新的函数
function fn() {
  console.log(this)
}

var newFn = fn.bind('aaa')

newFn()
newFn()
newFn()
newFn()