const { teste } = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.get("/teste", teste)


module.exports = userRouter;
