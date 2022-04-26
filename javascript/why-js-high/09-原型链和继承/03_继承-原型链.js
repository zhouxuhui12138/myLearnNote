// // 父类：公共属性和公共方法
// function Person(name, age, id) {
//   this.name = name
//   this.age = age
//   this.id = id
// }
// Person.prototype.eating = function() {
//   console.log(this.name + ' 在吃饭')
// }

// // 子类：私有属性和私有方法
// function Student(name, age, id) {
//   Person.call(this, name, age, id)
// }

// Student.prototype = new Person()

// Student.prototype.studying = function() {
//   console.log(this.name + ' 在学习')
// }

// const s1 = new Student('张三', 18, 1)
// const s2 = new Student('李四', 19, 2)

// console.log(s1)
// console.log(s2)
// s1.eating()
// s2.studying()


// var obj = {
//   name: 'xz'
// }

// obj.__proto__= {
//   age: 18
// }

// console.log(obj.age)