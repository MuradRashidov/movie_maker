const {buildSchema} = require("graphql");
//const Movie = require("../model/model")
const movieSchema = buildSchema(`
   type Query {
    movies:[Movie]
   }
   type Mutation {
    addMovie(name : String! , genre : String! , year : String!): Movie
   }
   type Movie {
    name:String,
    genre:String,
    year:String,
    
    

   }


`
);
module.exports = movieSchema