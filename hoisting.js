console.log(b);
var b = "b";

//const c
let c;

// different between let,const,var-------------------
// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized with undefined.
// While var and let can be declared without being initialized, const must be initialized during declaration.

// function hoisting----------------
// all functions are hoisted on top
// anonymous functions,arrow function or functions who's values are stored in variables are treadted as variables

// let,const are hoisted in temporal dead zone that is why they are not accessible before declaring them
// Micro task queue are given priority over callback queue . Microtask queue includes callbacks from promises / DOM manipulations. Call back queue includes callbacks from setTimeout, setInterval
