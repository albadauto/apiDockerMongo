const { teste, insertUser, verifyLogin } = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.post("/insertUser", insertUser);
userRouter.post("/verifyLogin", verifyLogin);


module.exports = userRouter;
