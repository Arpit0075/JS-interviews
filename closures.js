// closures and lexical scoping

// Lexical scoping refers to setting the scope, or range of functionality, of a variable so that it may be called (referenced) from within the block of code in which it is defined.
// Closures means scope (lexical scope) of variables is preserved within a function even after its execution and can be used further in the inner function

const sum = (a) => {
  console.log(a);

  let c = 3;
  // value of a can be passed to inner anon function
  return (b) => {
    return a + b + c;
  };
};

let res = sum(3);
console.log(res(2));

// for (var i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// } // 4

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// } // 3

for (var i = 0; i < 3; i++) {
  function x(value) {
    setTimeout(() => {
      console.log(value);
    }, 1000);
  }
  x(i);
} // 0 1 2
