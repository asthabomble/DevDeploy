const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const {
    createTask,
    getTasks,
    updateTask,
    updateTaskStatus,
    deleteTask
} = require("../controllers/task.controller");
router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.put("/:taskId", authMiddleware, updateTask);
router.patch("/:taskId/status", authMiddleware, updateTaskStatus);
router.delete("/:taskId", authMiddleware, deleteTask);
module.exports = router;