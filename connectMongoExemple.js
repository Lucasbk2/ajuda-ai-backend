const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ajudaai:ajudaai@firstcluster.2pnam.mongodb.net/FirstCluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log(collection)
    client.close();
});
