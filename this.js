console.log(this);
// window object

this.name = "arcade";
console.log(this.name); //arcade

function getName() {
  console.log(this); //window object
}

const getNameArrow = () => {
  console.log(this); // window object
};

//this inside a function in an object-- this refers to its parent object
let user1 = {
  name: "PK",
  getName() {
    console.log(this.name); //PK
  },
};

let user2 = {
  name: "PK",
  userChild: {
    newName: "newPK",
    getName() {
      //this will point to its parent object
      console.log(this.newName); //newPK
      console.log(this.name); // undefined
    },
  },
};

//arrow function takes this from its parent function not the object
let user3 = {
  name: "PK",
  getName: () => {
    console.log(this); // window Object
  },
};

let user4 = {
  name: "PK",
  getName() {
    console.log(this); // user4
    return () => {
      console.log(this); //user4
    };
  },
};

function makeUser() {
  return {
    name: "PV",
    ref: this,
  };
}

console.log(makeUser.ref); //window

function makeUser1() {
  return {
    name: "PV",
    ref() {
      console.log(this);
    },
  };
}
console.log(makeUser1.ref()); // it will log the entire object the we return through the function

//this inside setTimeOut
let user5 = {
  name: "Zed",
  logName() {
    console.log(this.name);
  },
};

setTimeout(user5.logName(), 3000); //logs undefined as the user5.logName() is directly invoked as a function with no context of the user5 object, this will point to window

setTimeout(function () {
  //callback
  user5.logName(); // this will log Zed, as this function will call the user5.logName function it will have the context of parent obj
}, 3000);

//calculate a calculator
const cal = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
};

const result = cal.add(5).multiply(2).subtract(1).add(2);
console.log(result.total);
