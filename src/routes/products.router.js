
const productsRouter = require("express").Router();



productsRouter.get("/test", (request, response) => response.send("OPA"))



module.exports = productsRouter;