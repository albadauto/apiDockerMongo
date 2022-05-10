const mongoose = require("mongoose");
require("../models/products.model");
const productModel = mongoose.model("products")



module.exports.insertProduct = async (request, response) => {
    try{
        const {name, description, price, type} = request.body;
        if (await productModel.create({name: name, description:description, price: price, type:type})){
            response.status(200).json({error: false, message:"Produto inserido com sucesso!"});
        }
    }catch(err){
        console.log(err);
    }
}