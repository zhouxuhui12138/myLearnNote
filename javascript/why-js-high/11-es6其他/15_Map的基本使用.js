// Map是可以使用其他数据类型来作为key的 比对象要更加灵活

// 创建方式1
// const map = new Map()
const obj = { name: "xz" }
function foo() {}

// map.set(obj, 'aaa')
// map.set(foo, 'bbb')
// console.log(map)

// 创建方式2
const map = new Map([
  [obj, "aaa"],
  [foo, "bbb"],
  [1, "ccc"],
])

// 获取
// console.log(map.get(obj))

// // 是否包含
// console.log(map.has(1))

// // 长度
// console.log(map.size)

// 遍历
// map.forEach((item, key) => {
//   console.log(item, key)
// })

for (const [key, value] of map) {
  console.log(key, value)
}
