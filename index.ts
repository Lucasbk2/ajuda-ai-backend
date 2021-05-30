import express from "express"
const cors = require('cors')
import { graphqlHTTP, Options } from "express-graphql";
import { formatWithOptions } from "util";

const app = express()
app.use(cors())

app.get('/', (req, res) => res.send('Server louco'));

app.listen(8080, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
