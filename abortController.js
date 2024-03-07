async function fetchData() {
  const controller = new AbortController();
  const signal = controller.signal;

  // Set a timeout for the request (optional)
  const timeoutId = setTimeout(() => {
    controller.abort();
    console.log("Request aborted due to timeout");
  }, 10000); // Timeout after 10 seconds

  try {
    const response = await fetch("https://api.example.com/data", {
      method: "GET",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
        // Other headers if needed
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.error("Fetch error:", error.message);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

// Call the fetchData function
//fetchData();

async function postData() {
  const controller = new AbortController();
  const signal = controller.signal;

  // Set a timeout for the request (optional)
  const timeoutId = setTimeout(() => {
    controller.abort();
    console.log("Request aborted due to timeout");
  }, 10000); // Timeout after 10 seconds

  const postData = {
    key: "value",
  };

  try {
    const response = await fetch("https://api.example.com/postData", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
        // Other headers if needed
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.error("Fetch error:", error.message);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

// Call the postData function
//postData();
