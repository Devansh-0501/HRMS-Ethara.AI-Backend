const express = require("express");
const cors = require("cors");

const EmployeeRoutes = require("./routes/Employee.routes");
const AttendanceRoutes = require("./routes/Attendance.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees", EmployeeRoutes);
app.use("/api/attendance", AttendanceRoutes);

app.use(errorHandler);

module.exports = app;
