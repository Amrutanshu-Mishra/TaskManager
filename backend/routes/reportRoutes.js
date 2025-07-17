const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { exportTasksReport, exportUsersReport } = require("../controller/reportController");

const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTasksReport); //Export all tasks as Excel/PDF
router.get("/export/users", protect, adminOnly, exportUsersReport); //Export user-task report

module.exports = router;