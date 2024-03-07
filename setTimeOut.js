//Read the entire article : https://medium.com/@swati.developer17/part-12-settimeout-closures-interview-questions-cfa0d402831f
function x1() {
  for (var i = 1; i <= 3; i++) {
    // using var here
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x1();

x1(); //4 4 4
// it will create 3 copies of the function inside setTimeOut with i as a reference , then it will be executed one by one once the timer runs out with the lastest value of i being 4

function x2() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x2();
// it will create 3 copies of the function inside setTimeOut with i as a reference and it will also keep i value as it is block scoped, then it will be executed one by one once the timer runs out

function x3() {
  for (var i = 1; i <= 10; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x3(); // 1 2 3 by wrapping setTimeOut inside a function close we define the scope for varaible and that function will remeber the scope of the varaible during its execution
