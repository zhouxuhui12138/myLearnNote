class Person {
  constructor(name, age) {
    this.name = name
    this.age = age

    this._address = '洛阳'
  }

  // 普通方法
  eating() {
    console.log(this.name + '在吃东西')
  }

  // 属性描述器方法
  get address() {
    return this._address
  }

  set address(val) {
    throw Error('该属性无法修改')
  }

  // 类的静态方法
  static randomNum() {
    return Math.floor(Math.random() * 100)
  }
}

// const p1 = new Person('xz', 19)
// p1.eating()
// console.log(p1)
// console.log(p1.address)
// p1.address = '北京'


for (let i = 0; i < 100; i++) {
  const result = Person.randomNum()
  if (result >= 99) {
    console.log(result)
  }
}