const express = require("express");
const teacherControllers = require("../controllers/teacherControllers");

const teacherRouter = express.Router();

teacherRouter.get("/teachers", teacherControllers.getTeachers);

teacherRouter.get("/teacher/:id", teacherControllers.getTeacher);

teacherRouter.post("/teacher", teacherControllers.createTeacher);

teacherRouter.put("/teacher/:id", teacherControllers.updateTeacher);

teacherRouter.delete("/teacher/:id", teacherControllers.deleteTeacher);

module.exports = teacherRouter;
