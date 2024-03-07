//functions are called in index.html
// IMplementing Debouncing-- when user stops typing input, the function is called 3 seconds after it
const debounce = (fn, delay = 3000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

let inputBtn = document.getElementById("inputId");
const searchData = () => {
  // console.log("Searching data");
  console.log(inputBtn.value);
};

const debouncedSearchData = debounce(searchData, 3000);

//-------------------------------------------------------------------------

// Implementing Throttling-- function can be called once after every 3 seconds
const throttle = (fn, delay = 3000) => {
  let timer = null;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

const fetchData = () => {
  console.log("Fetching data...");
};

const throttledFunction = throttle(fetchData, 2000);

// window.addEventListener("scroll", throttledFunction);
