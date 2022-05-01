const info = {
  _name: 'xz',
  get name() {
    return this._name
  }
}

const proxy = new Proxy(info, {
  get(target, key, receiver) {
    console.log('get-----', key)
    console.log(receiver === proxy)
    return Reflect.get(target, key, receiver)
  }
})

console.log(proxy.name)