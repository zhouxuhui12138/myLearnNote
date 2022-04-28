// 数组解构
const nums = [1, 3, 5]

// const [a, b, c] = nums
// console.log(a, b, c)

// 解构后面两个元素
// const [, a, b] = nums
// console.log(a, b)

// 解构默认值
// const [a, b, c, d = 0] = nums
// console.log(a, b, c, d)

// 解构一个元素 剩下的放入数组中
// const [a, ...arr] = nums
// console.log(a, arr)


// 对象解构
const obj = {
  name: 'xz',
  age: 19
}

const { name: myname, age } = obj
console.log(myname, age)

const { name: newName } = obj
console.log(newName)

const { address: newAddress = '洛阳' } = obj
console.log(newAddress)