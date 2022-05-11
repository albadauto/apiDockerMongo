const { response } = require("express");
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

module.exports.allProducts = async (request, response) => {
    try{
        const result = await productModel.find({});
        if (result.length > 0){
            return response.status(200).json({
                error: false,
                result
            })
        }else{
            response.status(404).json({error: false, message:"Não há cadastros de produtos"});
        }
    }catch(err){
        console.log(err);

    }
}


module.exports.findProduct = async (request, response) => {
    try{
        const result = await productModel.find({_id: request.params.id});
        if (result.length > 0){
            return response.status(200).json({
                error:false,
                result
            })
        }else{
            return response.status(404).json({
                error:true,
                message:"Não há registros de produtos.",
            })
        }
    }catch(err){
        console.log(err);
    }
}
