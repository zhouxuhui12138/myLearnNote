// 收集响应式的依赖类
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    this.reactiveFns.push(fn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 响应式函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 响应式对象
const info = {
  name: "xz",
  age: 18,
}

watchFn(() => {
  console.log("hello")
  const newName = info.name
  console.log(newName)
})

info.name = "yezi"
depend.notify()
