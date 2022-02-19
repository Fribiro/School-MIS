const express = require("express");
const staffControllers = require("../controllers/staffControllers");

const staffRouter = express.Router();

staffRouter.get("/staff", staffControllers.getAllStaff);

staffRouter.get("/staff/:id", staffControllers.getStaff);

staffRouter.post("/staff", staffControllers.createStaff);

staffRouter.put("/staff/:id", staffControllers.updateStaff);

staffRouter.delete("/staff/:id", staffControllers.deleteStaff);

module.exports = staffRouter;
