// 箭头函数简写返回一个对象
// var foo = () => ({ name: 'xz', age: 19 })
// console.log(foo())

// 箭头函数没有自己的this 他的this为自己父级作用域的this 如果父级作用域也没有this 就一层一层往上查找直到window

// 在没有箭头函数之前 实现一个这样的案例需要这样做
// var obj = {
//   data: [],
//   getData() {
//     // 定义一个变量 来存储obj的this
//     var _this = this
//     setTimeout(function () {
//       // 此时this为window
//       var res = [1, 3, 555]
//       _this.data = res
//       console.log(obj.data)
//     }, 2000)
//   },
// }

// obj.getData()

// 使用箭头函数
// var obj = {
//   data: [],
//   getData() {
//     setTimeout(() => {
//       // 此时this为obj 因为箭头函数没有this也不会绑定this 距离他最近的this就是obj
//       var res = [1, 3, 555]
//       this.data = res
//       console.log(obj.data)
//     }, 2000)
//   },
// }

// obj.getData()
