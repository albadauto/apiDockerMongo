const { Schema, default: mongoose } = require("mongoose");
const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})

mongoose.model("user", userSchema);

