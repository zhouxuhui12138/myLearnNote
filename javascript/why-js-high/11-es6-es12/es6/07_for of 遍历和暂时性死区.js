// 暂时性死区 => 使用const let声明变量前 变量无法被访问
// const bar = 123
// if (true) {
//   console.log(bar)
//   // let bar = 456
// }


// for of 遍历数组
const nums = [1, 3, 5, 7]
for (const item of nums) {
  console.log(item)
}
