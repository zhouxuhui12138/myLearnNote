console.log(Object.prototype)
console.log(Object.prototype.__proto__) // null

var obj = {}
console.log(Object.prototype === obj.__proto__)

function Person() {

}

console.log(Person.prototype.__proto__.__proto__)