// implementing promise
function canDrive(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("can drive");
    } else {
      reject("cannot drive");
    }
  });
}

// canDrive(1)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let age1 = 17;
let p1 = new Promise((resolve, reject) => {
  if (age1 >= 18) {
    resolve("can drive");
  } else {
    reject("cannot drive");
  }
});

let age2 = 19;
let p2 = new Promise((resolve, reject) => {
  if (age2 >= 18) {
    resolve("can drive");
  } else {
    reject("cannot drive");
  }
});

let p3 = new Promise((resolve, reject) => resolve("we're cool3!"));

let p4 = new Promise((resolve, reject) => resolve("we're cool4!"));

let p5 = new Promise((resolve, reject) => reject("we're cool5!"));

// implementing promise.all
// Promise.all([p3, p4, p5])
//   .then((resArr) => {
//     console.log(resArr);
//   })
//   .catch((err) => console.log(err));
// it looks for rejection of any promise and if cannot find gives the array of all resolved promises

// Promise.allSettled([p3, p4, p5])
//   .then((resArr) => {
//     console.log(resArr);
//   })
//   .catch((err) => console.log(err));
// it waits for all promises to be settled and then gives array of settled promises

// Promise.race([p3, p4, p5])
//   .then((resArr) => {
//     console.log(resArr);
//   })
//   .catch((err) => console.log(err));
// it wait for first promise to be settled and gives the settled promise

Promise.any([p3, p4, p5])
  .then((resArr) => {
    console.log(resArr);
  })
  .catch((err) => console.log(err));
// it waits for first resolved promise and gives it , if cannot find any reolved promised gives array of rejected promises

// let a = [1, 2, 3];

// let c = a.reduce((acc, curr) => {
//   return acc / curr;
// }, 1);

// console.log(c);
