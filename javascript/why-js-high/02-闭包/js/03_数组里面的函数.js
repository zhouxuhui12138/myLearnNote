var arr = [10, 4, 7, 9, 20]

// 如果想找出数组所有的偶数 可以这样遍历
// var newArr = []
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr)

// 也可以使用高阶函数 过滤器
// var newArr = arr.filter(function(item) {
//   return item % 2 === 0
// })
// console.log(newArr)


// map 映射
// var newArr2 = arr.map(function(item) {
//   return item * 10
// })
// console.log(newArr2)


// reduce累加
var myArr = [10, 20, 30]
var mySum = myArr.reduce(function(p, v) {
  return p + v
}, 10)
console.log(mySum)