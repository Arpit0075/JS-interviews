async function callApiWithRetries(url, maxRetries = 2, timeout = 5000) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchTimeout = setTimeout(() => {
        controller.abort();
      }, timeout);

      const response = await fetch(url, { signal });

      clearTimeout(fetchTimeout);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      if (attempt >= maxRetries) {
        throw new Error(
          `API request timed out after ${maxRetries + 1} attempts`
        );
      } else {
        console.log(
          `Request timed out. Retrying ${attempt + 1}/${maxRetries + 1}...`
        );
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
  }
}

// Example usage
callApiWithRetries("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//   Explanation:
// AbortController: An AbortController is used to create a signal that allows you to abort the fetch request after a certain timeout period.
// Timeout Handling: A setTimeout is used to call controller.abort() after the specified timeout period (5000 milliseconds in this case).
// Fetch Request: The fetch function is called with the url and signal from the AbortController.
// Clear Timeout: If the fetch request completes before the timeout, clearTimeout is called to prevent the timeout from aborting the request after it has completed.
// Error Handling: If an error occurs (either from a timeout or a non-OK response), the function checks if the maximum number of retries has been reached. If so, it throws an error; otherwise, it logs a retry message.
// Retry Delay: setTimeout is used to wait for 1 second before retrying the request.
// Usage Example: The function is called with a sample URL, and the response is handled by converting it to JSON and logging the data. If all retries fail, the error is caught and logged.
// This function ensures that it will try up to three times (initial try + two retries) to get a response from the API, each time waiting no more than 5 seconds for a response. If it still fails after the retries, it throws an error.
