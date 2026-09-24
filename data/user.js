// const user = [
//     {
//         email: "admin@xmail.com",
//         password: "adminX1"
//     },
//     {
//         email: "user@xmail.com",
//         password: "spectral"
//     }
// ]; 
const mongoose = require("mongoose");

 //mongoose.connect("mongodb://127.0.0.1:27017/Login");


 const userSchema = new mongoose.Schema({
    email: {type:String, required:true},
    password: {type:String, required:true}
}); 



module.exports = mongoose.model("user", userSchema);