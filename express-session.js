const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_jwt_secret_key"; // Replace with your own secret key

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/session_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Setup session middleware
app.use(
  session({
    secret: "your_session_secret_key", // Replace with your own session secret key
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/session_db",
      ttl: 24 * 60 * 60, // 1 day in seconds
    }),
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    },
  })
);

// Middleware to log request details for demonstration
app.use((req, res, next) => {
  console.log("Request Cookies:", req.cookies);
  console.log("Session Data:", req.session);
  next();
});

// Route to log in and create a JWT
app.post("/login", (req, res) => {
  const { userId } = req.body;

  // Generate a JWT
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "1d" });

  // Set the JWT as a cookie
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  });

  // Set session data
  req.session.userId = userId;
  req.session.questions = [];

  res.send("User logged in");
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).send("Invalid token");
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).send("Token not provided");
  }
};

// Route to add questions (protected)
app.post("/question", authenticateJWT, (req, res) => {
  const { question } = req.body;

  if (req.user) {
    // Assuming user is logged in and token is valid
    req.session.questions.push(question);
    res.send("Question added to session");
  } else {
    res.status(401).send("User not authenticated");
  }
});

// Route to log out and clear the JWT cookie and session
app.post("/logout", (req, res) => {
  res.clearCookie("auth_token");
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to logout");
    }
    res.send("User logged out");
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
