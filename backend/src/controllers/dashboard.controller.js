const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboard = async (req, res) => {
    try {
        const totalProjects = await Project.countDocuments({
            owner: req.user.userId
        });

        const totalTasks = await Task.countDocuments({
            createdBy: req.user.userId
        });

        const todo = await Task.countDocuments({
            createdBy: req.user.userId,
            status: "Todo"
        });

        const inProgress = await Task.countDocuments({
            createdBy: req.user.userId,
            status: "In Progress"
        });

        const done = await Task.countDocuments({
            createdBy: req.user.userId,
            status: "Done"
        });

        res.status(200).json({
            success: true,
            dashboard: {
                totalProjects,
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
    getDashboard
};