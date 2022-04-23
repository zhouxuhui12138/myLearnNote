// 虽然没有使用defineProperty 但是也有默认的配置对象
// value => 赋值的值
// configurable => true
// enumerable => true
// writable => true
var person = {
  name: 'xz',
  age: 18
}

// 如果想对一个对象进行一些限制 如只读 无法删除 可以使用Object.defineProperty
// 数据属性描述符
Object.defineProperty(person, 'address', {
  value: '洛阳', // 默认值undefined
  configurable: false, // 是否可以配置 false不可删除 不可修改 默认值false
  enumerable: false, // 是否可以枚举（可以log出来或者遍历出来key）默认值false
  writable: true, // 是否可以写入值 默认值false
})

person.address = '郑州'
console.log(person.address)
console.log(person)