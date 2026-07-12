const express = require("express");

const app = express();

// Middleware to read JSON from request body
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const projectRoutes = require("./routes/project.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const userRoutes = require("./routes/user.routes");
// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to TeamTask API 🚀"
    });
});

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

module.exports = app;