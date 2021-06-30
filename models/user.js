const mongoose = require("mongoose")
const {Schema} = mongoose 

const userSchema = new Schema({
    name: String,
    number: String, 
    email: String,
    avatar: String, 
    username: String, 
    password: String, 
    lat: String,
    lon: String,
    star: Number
})


module.exports = mongoose.model("User", userSchema);
