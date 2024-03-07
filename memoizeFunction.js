// memoize a function
const memoize = (fn) => {
  let result = {};
  return (...args) => {
    let argKey = JSON.stringify(args);
    if (!result[argKey]) {
      result[argKey] = fn(...args);
    }
    return result[argKey];
  };
};

const multiply = (num1, num2) => {
  for (let i = 0; i < 9999999; i++) {}
  return num1 * num2;
};

const memoizedFunction = memoize(multiply);

// console.time("First call");
// multiply(2, 3);
// console.timeEnd("First call");

// console.time("Second call");
// multiply(2, 3);
// console.timeEnd("Second call");

console.time("First call");
memoizedFunction(2, 3);
console.timeEnd("First call");

console.time("Second call");
memoizedFunction(2, 3);
console.timeEnd("Second call");
