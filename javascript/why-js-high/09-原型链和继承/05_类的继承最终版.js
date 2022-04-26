function inheritPrototype(subType, SuperType) {
  subType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(subType.prototype, 'constructor', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: subType
  })
}

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.eating = function() {
  console.log(this.name + 'eating')
}

function Student(name, age, id) {
  Person.call(this, name, age)
  this.id = id
}

inheritPrototype(Student, Person)

Student.prototype.studying = function() {
  console.log(this.name + 'studying')
}


const s1 = new Student('xz', 18, 01)
const s2 = new Student('why', 22, 02)
console.log(s1)
console.log(s2)
s1.eating()
s1.studying()