const mongoose = require("mongoose")

// const User = createModel('User', require('./models/user'));
// const Chat = createModel('Chat', require('./models/chat'));
// const HelpRegistry = createModel('HelpRegistry', require('./models/registry'));


mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err => console.log(err)    )


module.exports = [  
    
]