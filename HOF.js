//higher order functions are functions which takes either argument as functions or returns function or both.
//first class function means functions are treated like variables, they can be stored in a variable and can be passed as argument in a function , we can also return a function from another function

const greet = (greeting) => {
  return greeting;
};

const HOF = (greetFunction, name) => {
  let greet = greetFunction("hi");
  return `${greet} ${name}`;
};

let a = HOF(greet, "Rohan");
