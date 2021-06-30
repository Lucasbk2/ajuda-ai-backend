const mongoose = require("mongoose")
const {Schema} = mongoose 


const helpRegistrySchema =  new Schema({
    timestamp_finish: Number, 
    timestamp_initial: Number, 
    id_provider: String, 
    id_requesting: String, 
    titulo: {type: String, max: 65},

    latProvider: String,
    lonProvider: String,

    latRequesting: String,
    lonRequesting: String,
    
    descricao: String, 
    color: String
})



module.exports = mongoose.model("HelpRegistry", helpRegistrySchema); 
