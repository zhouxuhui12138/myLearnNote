function inheritPrototype(subType, SuperType) {
  subType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(subType.prototype, 'constructor', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: subType
  })
}

function Person() {}

function Student() {}

inheritPrototype(Student, Person)

console.log(Person.prototype.__proto__.constructor)
const s1 = new Student()
console.log(s1 instanceof Student)
console.log(s1 instanceof Person)
console.log(s1 instanceof Object)