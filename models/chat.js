const {Schema} = require("mongoose")

const message =  new Schema({
    id: Number, 
    message: String
})

const chatSchema =  new Schema({
    chat_key: String,
    messages: [message]
})

module.exports = chatSchema
