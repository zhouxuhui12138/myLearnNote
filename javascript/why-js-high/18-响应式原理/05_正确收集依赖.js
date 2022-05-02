let activeReactiveFn = null

// 收集响应式的依赖类
class Depend {
  constructor() {
    // 用set而不是数组是不希望添加重复的函数
    this.reactiveFns = new Set()
  }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
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
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 响应式对象
const info = {
  name: "xz",
  age: 18,
}

const infoProxy = new Proxy(info, {
  get(target, key, receiver) {
    // 通过target和key拿到正确的depend并且添加到响应式函数数组
    const depend = getDepend(target, key)
    depend.depend()

    return Reflect.get(target, key, receiver)
  },
  set(target, key, newVal, receiver) {
    Reflect.set(target, key, newVal, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(() => {
  console.log(infoProxy.name, 1)
  console.log(infoProxy.age, 2)
})

infoProxy.name = "yezi"
infoProxy.age = 19