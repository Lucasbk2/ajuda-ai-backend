const mongoose = require("mongoose")
const {Schema} = mongoose 

const message =  new Schema({
    id: Number, 
    message: String
})

const chatSchema =  new Schema({
    chat_key: String,
    messages: [message]
})

module.exports = mongoose.model("Chat", chatSchema);