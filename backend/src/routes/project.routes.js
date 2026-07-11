const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const { createProject } = require("../controllers/project.controller");
const {
    
    getProjects
} = require("../controllers/project.controller");

// Protected route
router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProjects);
module.exports = router;