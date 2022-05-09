const mongoose = require("mongoose");

mongoose.connect('mongodb://mongo:27017/teste')
.then(() => console.log("Tudo na paz"))
.catch(err => console.log(err))
