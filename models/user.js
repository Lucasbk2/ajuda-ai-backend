const {Schema} = require("mongoose")

const userSchema = new Schema({
    name: String,
    number: String, 
    email: String,
    avatar: String, 
    username: String, 
    password: String, 
    chat_key: String,
    star: Number
})


module.exports = userSchema
