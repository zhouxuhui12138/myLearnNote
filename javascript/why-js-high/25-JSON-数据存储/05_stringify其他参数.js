const info = {
  name: "xz",
  age: 18,
  friend: ["yezi"],
}

// 第二个参数 传入数组 设定哪些需要转换
// const JSONString = JSON.stringify(info, ["name", "age"])

// 第二个参数 传入一个回调函数 会劫持每次转换
// const JSONString = JSON.stringify(info, (key, value) => {
//   if (key === "age") {
//     return value + 1
//   }

//   return value
// })

// 第三个参数 让代码阅读性更强
const JSONString = JSON.stringify(info, null, 2)


console.log(JSONString)
