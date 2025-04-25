function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  };
}

function Employee(name, age, jobTitle) {
  // Inherit name and age from Person
  Person.call(this, name, age); // Call Person constructor with this context
  this.jobTitle = jobTitle;

  this.jobGreet = function () {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  };
}

// Inherit prototype chain (if needed for prototype-based inheritance)
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

