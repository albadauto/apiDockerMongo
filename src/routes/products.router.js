const { insertProduct } = require("../controllers/products.controller");

const productsRouter = require("express").Router();



productsRouter.post("/insert", insertProduct);



module.exports = productsRouter;