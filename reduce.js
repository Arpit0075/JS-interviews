//Article Link: https://www.simplilearn.com/tutorials/javascript-tutorial/array-reduce-javascript

// Example 1: Summing All the Values
// In this example, we will implement array reduce in JavaScript to sum the array elements and log the result to the console.

let num = [5, 9, 12, 24, 67];

let sum = num.reduce(function (accumulator, curValue) {
  return accumulator + curValue;
}, 0);

console.log(sum); //117

// Example 2: Summing Values in an Object Array Using Array Reduce JavaScript
// To sum values from an object array, we need to pass initialValue to the method. This would force all the elements of the array to pass through the function and give the desired result.

let initialValue = 0;

let obj = [{ n: 5 }, { n: 9 }, { n: 13 }, { n: 25 }, { n: 40 }];

let sum2 = obj.reduce(function (accumulator, curValue) {
  return accumulator + curValue.n;
}, initialValue);

console.log(sum2); //92

// Example 3: Flattening an Array of Arrays With Reduce Method
// This time we will take an array of arrays and reduce (flatten) it to a single array. The code below demonstrates the same.

let mulArray = [
  [3, 5],
  [1, 7],
  [12, 9],
];

let newArray = mulArray.reduce(function (accumulator, curValue) {
  //console.log(curValue);
  return accumulator.concat(...curValue);
}, []);

console.log(newArray);

// Example 4: Counting Instances in an Object Using Array Reduce in JavaScript
// Here, we will create an array with car names and use the array reduce in JavaScript to count the number of instances when a car name has occurred.

let myCars = [
  "Mercedes-Benz",
  "Jeep",
  "Ferrari",
  "Lamborghini",
  "Mercedes-Benz",
  "BMW",
  "Ferrari",
];

let instances = myCars.reduce(function (allCars, car) {
  if (allCars[car]) {
    allCars[car]++;
  } else {
    allCars[car] = 1;
  }

  //   if (car in allCars) {
  //     allCars[car]++;
  //   } else {
  //     allCars[car] = 1;
  //   }

  return allCars;
}, {});

console.log(instances);

// Example 5: Grouping Objects With Array Reduce in JavaScript
// This example groups objects based on a property value using the JavaScript array reduce method.

let student = [
  { name: "David", age: 23, hobby: "fishing" },

  { name: "Rachel", age: 25, hobby: "cooking" },

  { name: "Rahul", age: 22, hobby: "fishing" },
];

function myFunc(arr, prop) {
  return arr.reduce(function (acc, item) {
    let key = item[prop];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});
}

let groupedStudent = myFunc(student, "hobby");

console.log(groupedStudent);

// Example 6: Removing Duplicates With Array Reduce
// For this example, we will create an array with multiple recurring values and then use the array reduce in JavaScript to eliminate those repeating values.

let array = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15];

let newArray1 = array.reduce(function (accumulator, curValue) {
  if (accumulator.indexOf(curValue) === -1) {
    accumulator.push(curValue);
  }

  return accumulator;
}, []);

console.log(newArray1);
