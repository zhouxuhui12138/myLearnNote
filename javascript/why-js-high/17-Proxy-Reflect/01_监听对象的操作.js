const obj = {
  name: 'xz',
  age: 19
}

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get() {
      console.log(`${key}被访问了`)
      return value
    },
    set(newValue) {
      console.log(`${key}被修改了`)
      value = newValue
    }
  })
})

obj.name = 'yezi'
obj.age = 21

console.log(obj.name)
console.log(obj.age)