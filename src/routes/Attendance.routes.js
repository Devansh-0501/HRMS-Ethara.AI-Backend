const express = require("express");
const { body } = require("express-validator");
const {
  markAttendance,
  getAttendanceByEmployee,
} = require("../controllers/Attendance.controller");

const router = express.Router();

router.post(
  "/",
  [
    body("employeeId").notEmpty(),
    body("date").notEmpty(),
    body("status").isIn(["Present", "Absent"]),
  ],
  markAttendance
);

router.get("/:employeeId", getAttendanceByEmployee);

module.exports = router;
