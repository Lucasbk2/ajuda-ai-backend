// const db = require("./db")
const User = require('./models/user')
const HelpRegistry = require('./models/registry')

module.exports = {
    Query: {
        users: () => User.find(),
        user: (root, { id }) => User.findById(id),
        registrys: () => HelpRegistry.find(),
        registry: () => (root, { id }) => HelpRegistry.findById(id)

    },
    Mutation: {    
        createUser: (root, { name, number, email, avatar, username, password, chat_key, star
         }) => User.create({
            name,
            number,
            email,
            avatar,
            username,
            password,
            chat_key,
            star
            
        }),
        createRegistry: (root, {timestamp_finish, timestamp_initial, id_provider, id_requesting, titulo, descricao, color}) => HelpRegistry.create({
            timestamp_finish, 
            timestamp_initial, 
            id_provider, 
            id_requesting, 
            titulo, 
            descricao, 
            color
        })
    }
}

// module.exports = {
//     Query: {
//         users: () => { return db },
//         user: (_, { id }) => { return db.find(x => x.id == id) },
//     },
//     Mutation: {
//         createUser: (_, { name, email }) => { addUser({ name: name, email: email }) },
//     }
// }
