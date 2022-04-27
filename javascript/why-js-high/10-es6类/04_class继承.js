class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + '在吃饭')
  }

  fatherMethod() {
    console.log('father')
    console.log('father')
    console.log('father')
  }
}

class Coder extends Person {
  constructor(name, age, title) {
    // 调用父类的构造方法
    super(name, age)

    this.title = title
  }

  // 重写父类方法
  eating() {
    console.log('coder' + this.name + '在吃饭')
  }

  // 在父类方法上增加新的逻辑
  fatherMethod() {
    super.fatherMethod()

    console.log('son')
    console.log('son')
    console.log('son')
  }
}

const coder = new Coder('xz', 19, '前端')
console.log(coder)
coder.eating()
coder.fatherMethod()