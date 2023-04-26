const resolvers =  {
    movies:()=>{
        return [{
            id:1, name:"X____",genre:"Y____",year:"2023", image:"https://shorturl.at/aefv9" ,surname:"r"
        },
        {
            id:2,  name:"A____",genre:"B____",year:"2023",image:"https://shorturl.at/aefv9" ,surname:"r"
        },
        {
            id:3, name:"K____",genre:"L____",year:"2023",image:"https://shorturl.at/aefv9" ,surname:"r"
        }
        ,
        {
            id:4, name:"_____",genre:"_____",year:"2023",image:"https://shorturl.at/aefv9" ,surname:"r"
        }]
    },
    addMovie:(args)=>{
        return{
            name:args.name
        }
    }
}

module.exports = resolvers;