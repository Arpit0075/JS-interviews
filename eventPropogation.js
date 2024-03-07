//Event Bubbling- event spreads(propogates) outward towards the parent element. It is by default.
//Event Capturing- event spread inwards toward the inner element from parent.

//event bubbling
document.querySelector("button").addEventListener("click", () => {
  console.log("button is clicked");
});

//event capturing
document.querySelector("div").addEventListener(
  "click",
  () => {
    console.log("div is clicked");
  },
  true
);

//stop propogation
document.querySelector("button").addEventListener("click", (event) => {
  console.log("button is clicked");
  event.stopPropagation();
});
