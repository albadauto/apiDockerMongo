const { Schema, default:mongoose } = require("mongoose");

const productSchema = new Schema({
    name:{
        type: String
    },
    price:{
        type: String
    },
    description:{
        type:String
    },
    type:{
        type:String
    }
})



mongoose.model("products", productSchema);
