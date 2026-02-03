const express = require("express");
const { body } = require("express-validator");
const {
  addEmployee,
  getEmployees,
  deleteEmployee,
} = require("../controllers/Employee.controller");

const router = express.Router();

router.post(
  "/",
  [
    body("employeeId").notEmpty(),
    body("fullName").notEmpty(),
    body("department").notEmpty(),
    body("email").isEmail(),
  ],
  addEmployee
);

router.get("/", getEmployees);
router.delete("/:id", deleteEmployee);

module.exports = router;
