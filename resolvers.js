/*
// const db = require("./db")
const db = [
    {id: 1, name: "teste", email: "teste@gmaiteste.com"}
]
*/
const User = require('./models/user')
const HelpRegistry = require('./models/registry')

module.exports = {
    Query: {
        users: () => User.find(),
        user: (root, { id }) => User.findById(id),
        userLogin: (root, { login, pass }) => User.find( { email: login, password: pass } ),
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

/*
module.exports = {
    Query: {
        users: () => { return db },
        user: (_, { id }) => { return db.find(x => x.id == id) },
    },
    Mutation: {
        createUser: (_, { name, email }) => { 
            let maxId = db[db.length-1].id + 1
            db.push({ id: maxId, name: name, email: email })
            return db[db.length-1];
        },
    }
}
*/
