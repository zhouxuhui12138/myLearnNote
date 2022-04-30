// 把多维数组转成一维数组
const nums = [10, [1, [3, 5], [2, 9]], 20]

// 递归实现
// const newNums = []
// function flat(arr) {
//   arr.forEach(item => {
//     if (item instanceof Array) {
//       flat(item)
//     } else {
//       newNums.push(item)
//     }
//   })

//   return newNums
// }

// const res = flat(nums)
// res.forEach(item => {
//   console.log(item)
// })


// flat使用
// const newNums = nums.flat(Infinity) // Infinity 可展开任意深度的嵌套数组
// console.log(newNums)


// flatMap使用场景
const arr = ['hello lyh', 'hello yz', 'hello xz']

// flatMap深度默认为1
const newArr = arr.flatMap(item => {
  return item.split(' ')
})
console.log(newArr)