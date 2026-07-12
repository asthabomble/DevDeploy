const Project = require("../models/Project");
const User = require("../models/User");
const Task = require("../models/Task");

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

        // Only owner can add members
        if (project.owner.toString() !== req.user.userId) {
            return res.status(403).json({
                success: false,
                message: "Only the project owner can add members."
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
        const isMember = project.members.some(
            member => member.toString() === user._id.toString()
        );

        if (isMember) {
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
            count: project.members.length,
            members: project.members
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const removeMember = async (req, res) => {
    try {
        const { projectId, userId } = req.params;

        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        // Only owner can remove members
        if (project.owner.toString() !== req.user.userId) {
            return res.status(403).json({
                success: false,
                message: "Only the project owner can remove members."
            });
        }

        // Prevent owner from being removed
        if (project.owner.toString() === userId) {
            return res.status(400).json({
                success: false,
                message: "Project owner cannot be removed."
            });
        }

        project.members = project.members.filter(
            member => member.toString() !== userId
        );

        await project.save();

        res.status(200).json({
            success: true,
            message: "Member removed successfully.",
            project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        // Find project
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        // Only owner can delete
        if (project.owner.toString() !== req.user.userId) {
            return res.status(403).json({
                success: false,
                message: "Only the project owner can delete this project."
            });
        }

        // Delete all tasks of this project
        await Task.deleteMany({
            project: projectId
        });

        // Delete project
        await Project.findByIdAndDelete(projectId);

        res.status(200).json({
            success: true,
            message: "Project deleted successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const updateProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const { title, description } = req.body;

        // Find project
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        // Only owner can update
        if (project.owner.toString() !== req.user.userId) {
            return res.status(403).json({
                success: false,
                message: "Only the project owner can update this project."
            });
        }

        // Validate title
        if (title !== undefined && title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Project title cannot be empty."
            });
        }

        // Update fields
        if (title !== undefined) {
            project.title = title;
        }

        if (description !== undefined) {
            project.description = description;
        }

        await project.save();

        res.status(200).json({
            success: true,
            message: "Project updated successfully.",
            project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getProjectById = async (req, res) => {
    try {
        const { projectId } = req.params;

        const project = await Project.findById(projectId)
            .populate("owner", "name email")
            .populate("members", "name email");

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        const totalTasks = await Task.countDocuments({
            project: projectId
        });

        const todo = await Task.countDocuments({
            project: projectId,
            status: "Todo"
        });

        const inProgress = await Task.countDocuments({
            project: projectId,
            status: "In Progress"
        });

        const done = await Task.countDocuments({
            project: projectId,
            status: "Done"
        });

        res.status(200).json({
            success: true,
            project,
            stats: {
                totalTasks,
                todo,
                inProgress,
                done
            }
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
    addMember,
    getProjectMembers,
    removeMember,
    deleteProject,
    updateProject,
    getProjectById
};