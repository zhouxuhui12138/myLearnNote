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

// 获取depend的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
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

const infoProxy = new Proxy(info, {
  set(target, key, newVal, receiver) {
    Reflect.set(target, key, newVal, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(() => {
  console.log("hello")
  const newName = infoProxy.name
  console.log(newName)
})

watchFn(() => {
  console.log('------')
})

infoProxy.name = "yezi"
infoProxy.name = 'xiaozhou'
