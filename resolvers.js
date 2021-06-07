const db = [
    { id: 1, name: 'leite gay', email: 'leitemuitogay@ucl.br' }
]

function addUser(user) {
    db.push({ id: Math.max(db.map(x => x.id)), name: user.name, email: user.email })
    return db[db.length - 1]
}
module.exports = {
    Query: {
        users: () => { return db },
        user: (_, { id }) => { return db.find(x => x.id == id) },
    },
    Mutation: {
        createUser: (_, { name, email }) => { addUser({ name: name, email: email }) },
    }
}
