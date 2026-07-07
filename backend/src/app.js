const express = require("express");

const app = express();

// Middleware to read JSON from request body
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth.routes");

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to TeamTask API 🚀"
    });
});

// Auth Routes
app.use("/api/auth", authRoutes);

module.exports = app;