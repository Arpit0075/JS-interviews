// Promises are asynchrenous, it runs in parallel
// event loop is single threaded synchroneous

let p1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("we're cool1!");
  }, 5000)
);

let p2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("we're cool2!");
  }, 10000)
);

// let p3 = new Promise((resolve, reject) =>
//   setTimeout(() => {
//     reject("we're not cool3!");
//   }, 1000)
// );

let p4 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("we're cool4!");
  }, 1000)
);

async function a() {
  try {
    let res4 = await p4;
    console.log(res4);
    let res1 = await p1;
    console.log(res1);
    let res2 = await p2;
    console.log(res2);
  } catch (e) {
    console.log(e);
  }
}
a();

// it will run all promises together and then executed in ascending order
