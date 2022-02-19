const express = require('express')
const studentControllers = require('../controllers/studentControllers')

const studentRouter = express.Router();

studentRouter.get("/students", studentControllers.getStudents);

studentRouter.get("/student/:id", studentControllers.getStudent);

studentRouter.post("/student", studentControllers.createStudent);

studentRouter.put("/student/:id", studentControllers.updateStudent);

studentRouter.delete("/student/:id", studentControllers.deleteStudent);

module.exports = studentRouter;