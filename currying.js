// currying
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//const add = (a) => (b) => (c) => a + b + c;

let res1 = add(1)(2)(3);
console.log(res1);

// infinite currying
// function add1(a) {
//   return function (b) {
//     if (b) return add1(a + b);
//     return a;
//   };
// }

const add1 = (a) => (b) => b ? add1(a + b) : a;
let res2 = add1(2)(3)(1)(9)(1)();
console.log(res2);
