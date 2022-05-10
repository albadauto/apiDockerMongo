const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.verifyJWT = (request, response) => {
    try{
        const token = request.header("authorization");
        if(!token) return response.status(404).json({auth: false});

        jwt.verify(token, process.env.SECRET_JWT, (err) => {
            if (err){
                response.status(200).json({auth:false, err});
            }

            next();
        } )
    }catch(err){
        console.log(err);
    }
}