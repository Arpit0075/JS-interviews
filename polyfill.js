let arr2 = [1, 2, 5, 6];
// polyfill for filter function
Array.prototype.myFilter = function (cb) {
  let array = [];
  for (let el of this) {
    if (cb(el)) {
      array.push(el);
    }
  }
  return array;
};
let ans = arr2.myFilter((el) => el > 2);
//console.log(ans);

let arr3 = [1, 2, 5, 6];
// polyfill for map function
Array.prototype.myMap = function (cb) {
  let array = [];
  for (let el of this) {
    array.push(cb(el));
  }
  return array;
};
let ans1 = arr3.myMap((el) => el * 2);
//console.log(ans1);

//polyfill for reduce
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const array = this;
    const length = array.length;
    let accumulator = initialValue !== undefined ? initialValue : array[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < length; i++) {
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
    }

    return accumulator;
  };
}

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.myReducereduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
