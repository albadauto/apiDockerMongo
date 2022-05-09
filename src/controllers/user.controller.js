const mongoose = require("mongoose");
require("../models/user.model");
const userModel = mongoose.model("user");

module.exports.teste = async (request, response) => {
    try{
        if (await userModel.create({name: "Adauto", email:"root@root", password:"root"})){
            response.json({inserted:true});
        }
    }catch(err){
        console.log(err);
    }
}