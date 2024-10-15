function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
}

function Employee(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.work = function () {
    console.log(`My Job is ${this.job}`)
}

const martha = new Employee("Martha", 44, "CEO")
martha.greet()
martha.work()