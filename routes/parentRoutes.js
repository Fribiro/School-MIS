const express = require("express");
const parentControllers = require("../controllers/parentControllers");

const parentRouter = express.Router();

parentRouter.get("/parents", parentControllers.getParents);

parentRouter.get("/parent/:id", parentControllers.getParent);

parentRouter.post("/parent", parentControllers.createParent);

parentRouter.put("/parent/:id", parentControllers.updateParent);

parentRouter.delete("/parent/:id", parentControllers.deleteParent);

module.exports = parentRouter;
