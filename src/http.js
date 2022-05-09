const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.router");
require("./models/db");

//CONFIG
app.use(cors());


//ROUTES
app.use("/teste", userRouter);

module.exports = {
    app: app
}