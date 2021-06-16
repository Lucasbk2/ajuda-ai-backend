const {Schema} = require("mongoose")

const helpRegistry =  new Schema({
    timestamp_finish: Number, 
    timestamp_initial: Number, 
    id_provider: Number, 
    id_requesting: Number, 
    titulo: {type: String, max: 65}, 
    descricao: String, 
    color: String
})



module.exports = helpRegistry
