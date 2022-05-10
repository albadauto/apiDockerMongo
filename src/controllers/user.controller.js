const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();  
require("../models/user.model");
const userModel = mongoose.model("user");

module.exports.insertUser = async (request, response) => {
    try{
        const {name, email, password} = request.body;
        if (name && email && password){
            await userModel.create({name: name, email: email, password: password});
            response.status(201).json({ isInserted: true, message:"Usuário cadastrado!"});
        }else{
            response.status(404).json({ isInserted: false, message:"Digite nome, email e uma senha para cadastro!"});
        }
    }catch(err){
        console.log(err);
    }
}



module.exports.verifyLogin = async (request, response) => {
    try{
        const {email, password} = request.body;

        if (email && password){
            const result = await userModel.find({email: email, password: password});
            const token = jwt.sign({id: result.id}, process.env.SECRET_JWT, {expiresIn: 3000});
            response.status(200).json({auth: true, token});
        }else{
            response.status(404).json({auth:false, message:"Digite um email e senha!"});
        }
    }catch(err){
        console.log(err);
    }
}

