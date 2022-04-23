var person = {
  name: 'xz',
  age: 19,
  _address: '洛阳'
}

// 存取属性描述符
Object.defineProperty(person, 'address', {
  configurable: true,
  enumerable: true,
  get() {
    return this._address
  },
  set(value) {
    foo()
    return this._address = value
  }
})

console.log(person.address)
person.address = '北京'
console.log(person.address)

function foo() {
  console.log('address被修改了')
}