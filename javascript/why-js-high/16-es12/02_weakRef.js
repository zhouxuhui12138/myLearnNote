const finalRegistry = new FinalizationRegistry(value => {
  console.log(value + "对象被销毁了")
})

let obj = { name: "xz" }
// 弱引用
let info = new WeakRef(obj)

finalRegistry.register(obj, "obj")

setTimeout(() => {
  console.log(info.deref()?.name)
}, 10000)

obj = null
