import React, { Component } from 'react'
import Moviee from '../Moviee'

export default class Moviees extends Component {
    state = {
        movies: [
            {
                id:1, name:"X____",ganre:"Y____",year:"2023", image:"https://shorturl.at/aefv9" 
            },
            {
                id:2,  name:"A____",ganre:"B____",year:"2023",image:"https://shorturl.at/aefv9" 
            },
            {
                id:3, name:"K____",ganre:"L____",year:"2023",image:"https://shorturl.at/aefv9" 
            }
            ,
            {
                id:4, name:"_____",ganre:"_____",year:"2023",image:"https://shorturl.at/aefv9" 
            }
        ]
    }
  render() {
    return (
      <div className='movies'>
        {this.state.movies.map(movie=>{
             return <Moviee 
             key={movie.id} 
             name={movie.name}
             ganre={movie.ganre}
             year={movie.year}
             image={movie.image}
             >

             </Moviee>
        })}
      </div>
    )
  }
}
