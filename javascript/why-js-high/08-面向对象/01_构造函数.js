// 构造函数和普通的函数一样 但是通过new关键字来调用函数时 他就是一个构造函数
function Person(name, age) {
  // 构造函数在执行时会自动生成一个空对象 并且把this绑定给生成的空对象 然后把返回this
  this.name = name
  this.age = age

  this.run = () => {
    console.log(this.name + "在跑步")
  }
}

const p1 = new Person("张三", 19)

console.log(p1)
p1.run()
