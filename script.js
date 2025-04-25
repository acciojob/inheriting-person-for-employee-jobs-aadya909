function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // inherit name and age
  this.jobTitle = jobTitle;

  this.jobGreet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  };
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;


