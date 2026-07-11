const Project = require("../models/Project");

const createProject = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate input
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Project title is required."
            });
        }

        // Create project
        const project = await Project.create({
            title,
            description,
            owner: req.user.userId,
            members: [req.user.userId]
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully.",
            project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({
            owner: req.user.userId
        });

        res.status(200).json({
            success: true,
            count: projects.length,
            projects
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createProject,
    getProjects
};