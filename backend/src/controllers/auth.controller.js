const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please fill all fields"
        });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            success: false,
            message: "Invalid password"
        });
    }

    // Generate JWT Token
    const token = jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    // Send Response
    res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
};

module.exports = {
    registerUser,
    loginUser
};