const obj = {
  name: 'xz',
  age: 18
}

obj.__proto__ = {
  __proto__: {
    __proto__: {
      address: '洛阳'
    }
  }
}

// 在对象中访问一个属性 如果他自身没有的话 会沿着他的__proto__查找 如果还没有
// 则沿着__proto__.__proto__继续查找 直到查询到顶级原型Object.prototype上 如果还没有的话则输出undefined 
// 这就称为原型链
console.log(obj.address)