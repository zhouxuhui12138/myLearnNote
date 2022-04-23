var obj = {
  _age: 19
}

// 定义多个属性描述符
Object.defineProperties(obj, {
  name: {
    enumerable: true,
    configurable: true,
    value: 'xz',
    writable: true
  },
  age: {
    enumerable: true,
    configurable: true,
    get() {
      return this._age
    }
  }
})

console.log(obj.name)
console.log(obj.age)