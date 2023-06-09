const Movie = require("../model/model");
const resolvers =  {
    movies:()=>{
        return Movie.find({});
    },
    movieByName:(args)=>{
       return Movie.findOne({name:args.name});
    },
    addMovie:async(args)=>{
        let movie = new Movie({
            name:args.name,
            genre:args.genre,
            year:args.year
        })
        await movie.save();
        return movie
    
    }
}

module.exports = resolvers;