const express = require("express");
const app = express();
const mongoose= require("mongoose");
const {graphqlHTTP} = require("express-graphql");
const movieSchema = require("./schema/schema");
const resolvers = require("./resolver/resolver");
mongoose.connect("mongodb+srv://muradrashidov995:test12345@cluster0.ziakrwr.mongodb.net/test",{
    useNewUrlParser:true,
})
.then(()=>console.log("Mongo DB connecting is successful"))
.catch((err)=>console.log(err));



app.get("/",(req,res)=>{
    res.send("I,m backend app.js");
});
app.use("/graphql",graphqlHTTP({
    schema:movieSchema,
    graphiql:true,
    rootValue:resolvers

}))
app.listen(4000,()=>{
    console.log("App running PORT:4000")
});
