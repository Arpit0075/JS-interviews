// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());

// Encapsulation example
class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},
        Address is: ${this.add}`);
  }
}

let person1 = new Person("Mukul", 21);
person1.add_Address("Delhi");
person1.getDetails();

// Inheritance example
class Child {
  constructor(name) {
    this.name = name;
  }
  // method to return the string
  printName() {
    return `Name of person: ${this.name}`;
  }
}

class Student extends Child {
  constructor(name, id) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.id = id;
  }
  prindDetail() {
    return `${super.printName()},
        Student ID: ${this.id}`;
  }
  prindDetail1() {
    return `${this.name},Student ID: ${this.id}`;
  }
}
let student1 = new Student("Mukul", 22);
console.log(student1.prindDetail());
console.log(student1.prindDetail1());
