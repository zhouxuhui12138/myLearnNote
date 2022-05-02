const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
}

// 响应式对象
const info = {
  name: "xz",
  age: 18,
}

// info对象的name发生改变时执行该函数
watchFn(() => {
  const newName = info.name
  console.log(newName)
  console.log("hello")
})
watchFn(() => {
  console.log("我是响应式函数")
})

// 这只是一个普通函数 不参与响应式
function foo() {
  console.log("base")
}

info.name = "yezi"
reactiveFns.forEach(item => {
  item()
})
