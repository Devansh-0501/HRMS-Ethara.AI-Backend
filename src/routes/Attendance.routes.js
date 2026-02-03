// const express = require("express");
// const { body } = require("express-validator");
// const {
//   markAttendance,
//   getAttendanceByEmployee,
// } = require("../controllers/Attendance.controller");

// const router = express.Router();

// router.post(
//   "/",
//   [
//     body("employeeId").notEmpty(),
//     body("date").notEmpty(),
//     body("status").isIn(["Present", "Absent"]),
//   ],
//   markAttendance
// );

// router.get("/:employeeId", getAttendanceByEmployee);

// module.exports = router;
const express = require("express");
const { body } = require("express-validator");
const {
  markAttendance,
  getAttendanceByEmployee,
  getAttendanceSummary,
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

// Existing route (now supports date range)
router.get("/:employeeId", getAttendanceByEmployee);

// 🔥 NEW route for present count
router.get("/summary/:employeeId", getAttendanceSummary);

module.exports = router;
