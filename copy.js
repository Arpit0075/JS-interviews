//shallow copy vs deep copy

let arr1 = ["arun", "jamie"];
let arr2 = arr1; //this is shallow copy -- only the reference is copied.
let arr3 = [...arr1]; //this is deep copy -- new reference is created

let arr4 = [
  { name: "mohit", age: 30 },
  {
    name: "ron",
    age: 34,
  },
];

let arr5 = JSON.parse(JSON.stringify(arr4)); // this is deep copy
arr5[0].age = 22;

// console.log(arr5[0]);
// console.log(arr4[0]);
//In Deep copy a new reference is created and modification in one object does not impact the copied one
//In Shallow copy reference is copied and modification in one object does impact the copied one
