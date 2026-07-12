const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const { createProject } = require("../controllers/project.controller");
const {
    
    getProjects,addMember,getProjectMembers,removeMember
} = require("../controllers/project.controller");

// Protected route
router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProjects);
router.post("/:projectId/members", authMiddleware, addMember);
router.get("/:projectId/members", authMiddleware, getProjectMembers);
router.delete("/:projectId/members/:userId", authMiddleware, removeMember);
module.exports = router;