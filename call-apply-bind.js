// console.log(this);

//1. Call
//using call to call function of another object
let userObj1 = {
  name: "ROh",
  age: 23,
  getName() {
    console.log(this.name);
  },
};
let userObj2 = { name: "Rah", age: 25 };
// userObj1.getName();
// userObj1.getName.call(userObj2);

//using call as a generic function, it can be used invoked on any object
function printName() {
  console.log(this.name);
}
//printName.call(userObj2);

//passing arguments in a call
function PrintDetails(state, country) {
  console.log(`${this.name} belongs to ${state} ${country}`);
}
PrintDetails.call(userObj2, "CG", "India");

//--------------------------------------------------------------------------------------------------------------------------

//2. Apply - it is same as call but take arguments in the form of array
PrintDetails.apply(userObj2, ["CG", "India"]);

//=====================================================================================================================

//3. Bind - it is used to store the function inside a variable which can be called later
let answer = printName.bind(userObj2);
answer();

let answer2 = PrintDetails.bind(userObj2, "Mumbai", "INDia");
answer2();
