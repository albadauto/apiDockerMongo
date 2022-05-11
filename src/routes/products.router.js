const { insertProduct, allProducts, findProduct } = require("../controllers/products.controller");

const productsRouter = require("express").Router();



productsRouter.post("/insert", insertProduct);
productsRouter.get("/allProducts", allProducts);
productsRouter.get("/findProduct/:id", findProduct);

module.exports = productsRouter;