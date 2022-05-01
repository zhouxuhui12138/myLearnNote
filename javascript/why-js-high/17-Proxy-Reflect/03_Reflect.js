const info = {
  name: 'xz',
  age: 19
}

const infoProxy = new Proxy(info, {
  get(target, key) {
    return Reflect.get(target, key)
  },
  set(target, key, newVal) {
    return Reflect.set(target, key, newVal)
  }
})

infoProxy.age = 20
console.log(infoProxy.age)