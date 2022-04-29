// Set数据结构中不能有相同的元素
// const set = new Set()

// set.add(10)
// set.add(20)
// set.add(30)
// set.add(10)
// console.log(set)

// set.add({})
// set.add({})
// console.log(set)

// const obj = {}
// set.add(obj)
// set.add(obj)
// console.log(set)

// Set用来数组去重
const arr = [10, 33, 66, 33, 55, 10]
// const newArr = []

// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i])
//   }
// }

const arrSet = new Set(arr)
// const newArr = [...arrSet]
// console.log(newArr)


// 返回元素的个数
// console.log(arrSet.size)

// // 删除某个元素 需要传具体的值
// arrSet.delete(10)
// console.log(arrSet)

// // 查询Set中是否包含某个元素
// console.log(arrSet.has(33))

// // 清空Set
// arrSet.clear()
// console.log(arrSet)


// Set的遍历
arrSet.forEach(item => {
  console.log(item)
})

for (const item of arrSet) {
  console.log(item)
}