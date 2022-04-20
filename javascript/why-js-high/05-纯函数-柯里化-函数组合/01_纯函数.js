// var nums = [10, 11, 50, 66, 89]

// slice就是一个纯函数 因为他不会改变数组本身的值
// var newNums1 = nums.slice(-1)
// console.log(newNums1)
// console.log(nums)

// splice则不是纯函数 他会改变原数组
// var newNums2 = nums.splice(2)
// console.log(newNums2)
// console.log(nums)


// 纯函数 相同的输入会产生相同的输出 且没有副作用
// function foo(num1, num2) {
//   return num1 + num2
// }
// foo(1, 3)

// var obj = { name: 'xz' }

// // 不是一个纯函数 会产生副作用
// function bar() {
//   obj.name = '123'
// }

// bar()


