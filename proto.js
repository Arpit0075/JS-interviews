let obj1 = {
  name: "Varun",
  getName() {
    return this.name;
  },
};

let obj2 = {
  roll: 1,
  __proto__: obj1,
};

//__proto__ is used to inherit values,properties from parent

//console.log(obj2.name);
//console.log(obj2.getName());

function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

let user = new CreateUser("rohan", 23);
console.log(user);

//we can add custom methods to constructor function using prototype
CreateUser.prototype.getDetails = function () {
  return `user is ${this.name} and ${this.age} years old`;
};
//console.log(user.getDetails());

//we can add custom methods to object/array using prototype
let obj = { name: "uo" };
Object.prototype.show = function () {
  return this;
};
console.log(obj.show());
