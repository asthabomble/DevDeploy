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

const User = require("../models/User");

const addMember = async (req, res) => {
    try {
        const { projectId } = req.params;
        const { email } = req.body;

        // Find project
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        // Check if already a member
        if (project.members.includes(user._id)) {
            return res.status(400).json({
                success: false,
                message: "User is already a member."
            });
        }

        // Add member
        project.members.push(user._id);

        await project.save();

        res.status(200).json({
            success: true,
            message: "Member added successfully.",
            project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getProjectMembers = async (req, res) => {
    try {
        const { projectId } = req.params;

        const project = await Project.findById(projectId)
            .populate("members", "name email");

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        res.status(200).json({
            success: true,
            members: project.members
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
    getProjects,
    addMember,getProjectMembers
};