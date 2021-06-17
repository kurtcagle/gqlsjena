const graphql = require("graphql");
const express = require('express');

const app = express();

const schema = require('./schema/schema');
const { graphqlHTTP } = require("express-graphql");
console.log(graphqlHTTP);
app. use('/',(req,res) => {
    res.send("Welcome to GraphQL server. Use GraphQL endpoint at /graphql")
})

app.use(
    "/graphql",
    graphqlHTTP({
    schema: schema,
    graphiql: true,
    })); 

app.listen(5000, () => {
    console.log('now listening for requests on port 5000');
});