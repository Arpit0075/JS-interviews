//This code will not work just for demo
//backend code
const express = require("express");
const app = express();

// Empty sample data
const sampleData = {};

// Route to get data
app.get("/data", (req, res) => {
  if (Object.keys(sampleData).length === 0) {
    // If sampleData is empty, return a 404 Not Found status
    res.status(404).json({ message: "No data available" });
  } else {
    // If sampleData is not empty, return the data
    res.json(sampleData);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//frontend code to handle error
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      // If the response status is not OK (200-299), handle the error
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }

    // If the response status is OK, parse the response body as JSON
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // If an error occurs during the fetch request or JSON parsing, handle it here
    console.error("Fetch error:", error.message);
  }
}

// Call the fetchData function
//fetchData();
