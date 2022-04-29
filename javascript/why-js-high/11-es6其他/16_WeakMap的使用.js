// WeakMap的key只能是对象
// WeakMap的key的引用是弱引用

let obj = { name: 'xz' }

const weakMap = new WeakMap()
weakMap.set(obj)
console.log(weakMap)

obj = null
console.log(weakMap.get(obj))