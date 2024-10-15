function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
}

const alice = new Person("Alice", 23)
const bob = new Person("Bob", 22)

alice.greet()
bob.greet()