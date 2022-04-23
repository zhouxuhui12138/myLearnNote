function Person(name, age) {
  this.name = name
  this.age = age
}

// 给Person的prototype添加方法 p1在查找的时候会根据__proto__来查找到
Person.prototype.running = function() {
  console.log(this.name + '在跑步')
}

const p1 = new Person('张三', 18)
const p2 = new Person('小周', 19)

console.log(p1)
console.log(p2)
p1.running()
p2.running()