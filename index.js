const express = require('express');
const userCheck = require('./middleware/usercheck');
const dotenv = require("dotenv");
const parentRouter = require("./routes/parentRoutes");
const studentRouter = require("./routes/studentRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const staffRouter = require("./routes/parentRoutes");

const app = express();
const PORT = 3800;

dotenv.config({
  path: "./.env",
});

app.use("/", parentRouter);
app.use("/", studentRouter);
app.use("/", teacherRouter);
app.use("/", staffRouter);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})