const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");
const { validationResult } = require("express-validator");

exports.markAttendance = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const { employeeId, date, status } = req.body;

    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const attendance = await Attendance.create({
      employeeId,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ message: "Attendance already marked for this date" });
    }
    next(err);
  }
};

exports.getAttendanceByEmployee = async (req, res, next) => {
  try {
    const records = await Attendance.find({
      employeeId: req.params.employeeId,
    }).sort({ date: -1 });

    res.json(records);
  } catch (err) {
    next(err);
  }
};
