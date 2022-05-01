const info = {
  name: "xz",
  age: 19
}

const infoProxy = new Proxy(
  info,
  // 捕获器
  {
    // 获取
    get(target, key) {
      console.log("被获取了")
      return target[key]
    },
    // 更改
    set(target, key, newVal) {
      console.log("被修改")
      target[key] = newVal
    },
    // in操作符
    has(target, key) {
      console.log('in操作符捕获器被监听')
      return key in target
    },
    // 删除操作
    deleteProperty(target, key) {
      console.log('删除')
      delete target[key]
      console.log(target)
    }
  }
)

// 修改and获取
// console.log(infoProxy.name)
// infoProxy.name = "yezi"
// console.log(info)

// in
// console.log('name' in infoProxy)

// 删除
delete infoProxy.age


