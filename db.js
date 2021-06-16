const mongoose = require("mongoose")

createModel('User', require('./models/user'));
createModel('Chat', require('./models/chat'));
createModel('HelpRegistry', require('./models/registry'));


mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err => console.log(err)    )

function createModel(nameModel,schema) {
    mongoose.model(nameModel, schema);
}

module.exports = [  
    createModel
]