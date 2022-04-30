const finalRegistry = new FinalizationRegistry((value) => {
  console.log(value + '对象被销毁了')
})

let obj = {}

finalRegistry.register(obj, 'obj')
obj = null