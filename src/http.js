const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.router");
const productsRouter = require("./routes/products.router");
const { verifyJWT } = require("./middlewares/jwt.middleware");
require("./models/db");

//CONFIG
app.use(cors());
app.use(express.json());


//ROUTES
app.use("/users", userRouter);
app.use("/products", verifyJWT, productsRouter);

module.exports = {
    app: app
}