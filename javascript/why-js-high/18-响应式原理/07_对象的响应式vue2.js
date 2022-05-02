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

function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj, key)
        depend.depend()
        return value
      },
      set(newValue) {
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })

  return obj
}

// 响应式对象
const obj = reactive({
  name: "xz",
})

watchFn(() => {
  console.log(obj.name)
})

obj.name = "yezi"
