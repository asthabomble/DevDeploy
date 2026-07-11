const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const {
    registerUser,
    loginUser
} = require("../controllers/auth.controller");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

module.exports = router;