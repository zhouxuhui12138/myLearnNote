// 把entries格式转为object

const entries = [
  ["name", "xz"],
  ["age", "18"],
]

const obj = Object.fromEntries(entries)
console.log(obj)