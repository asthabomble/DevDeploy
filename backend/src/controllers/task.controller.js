const Task = require("../models/Task");
const Project = require("../models/Project");


const createTask = async (req, res) => {
    try {
        const { title, description, projectId, assignedTo } = req.body;

        // Validate required fields
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

        // Check if assigned user is a member of the project
        if (assignedTo) {
            const isMember = project.members.some(
                member => member.toString() === assignedTo
            );

            if (!isMember) {
                return res.status(400).json({
                    success: false,
                    message: "Assigned user is not a project member."
                });
            }
        }

        // Create task
        const task = await Task.create({
            title,
            description,
            project: projectId,
            assignedTo,
            createdBy: req.user.userId,
        });


       const populatedTask = await Task.findById(task._id)
    .populate("assignedTo", "name email")
    .populate("createdBy", "name email");

res.status(201).json({
    success: true,
    message: "Task created successfully.",
    task: populatedTask
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

const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title, description, assignedTo } = req.body;

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found."
            });
        }

        if (title !== undefined) {
            task.title = title;
        }

        if (description !== undefined) {
            task.description = description;
        }

        if (assignedTo !== undefined) {
            task.assignedTo = assignedTo;
        }

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully.",
            task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { status } = req.body;

        const validStatus = ["Todo", "In Progress", "Done"];

        if (!validStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task status."
            });
        }

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found."
            });
        }

        task.status = status;

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task status updated successfully.",
            task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found."
            });
        }

        await Task.findByIdAndDelete(taskId);

        res.status(200).json({
            success: true,
            message: "Task deleted successfully."
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
    getTasks,
    updateTask,
    updateTaskStatus,
    deleteTask
};