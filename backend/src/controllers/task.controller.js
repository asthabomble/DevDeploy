const Task = require("../models/Task");
const Project = require("../models/Project");

const createTask = async (req, res) => {
    try {
        const { title, description, projectId, assignedTo } = req.body;

        // Validate
        if (!title || !projectId) {
            return res.status(400).json({
                success: false,
                message: "Title and Project ID are required.",
            });
        }

        // Check project exists
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        // Create task
        const task = await Task.create({
            title,
            description,
            project: projectId,
            assignedTo,
            createdBy: req.user.userId,
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully.",
            task,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getTasks = async (req, res) => {
    try {
        const { projectId } = req.params;

        // Check project exists
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        const tasks = await Task.find({ project: projectId })
            .populate("assignedTo", "name email")
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: tasks.length,
            tasks
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createTask,
    getTasks
};