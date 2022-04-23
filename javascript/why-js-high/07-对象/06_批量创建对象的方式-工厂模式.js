function createPerson(name, age) {
  const person = new Object()

  person.name = name
  person.age = age

  person.run = function () {
    console.log(this.name + "在跑步")
  }

  return person
}

const p1 = createPerson("张三", 18)
const p2 = createPerson("李四", 28)

console.log(p1, p2)

p1.run()
p2.run()


// var obj = {
//   name: 'xz',
//   fn: function() {
//     console.log(this)
//   }
// }

// obj.fn()