// spread
let obj1 = { name: "Roh", age: 21, skill: "amazing", music: "metal" };
let obj2 = { ...obj1 };

let arr1 = ["ron", 21, "amazing", "metal"];
let arr2 = [...arr1];

//destructuring
let { name: name2, age, ...rest } = obj1; //if we want the name of variable as name2 we can do it as well
let [name, age1, ...rest1] = arr1;

//rest operator =>converts arguments into array
function showArray(...arg) {
  console.log(arg);
}

showArray("ram", "oh");
