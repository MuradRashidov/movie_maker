import React from 'react';
import Moviee from '../Moviee';
//import { gql } from 'apollo-boost';
import {useQuery} from 'react-apollo';
import { allMovies } from '../../queries/queries';


 const Moviees = () => {
  
    
  let {data,loading} =  useQuery(allMovies)

    //let data = this.props.data;
    if(loading){
      return <h2 className='message'>We are loading your movies</h2>
    }
    if(data.movies.length ===0){
      return <h2 className='message'>Please add movies of your choice</h2>
    }
    return (
      <div className='movies'>
        {data.movies.map(movie=>{
             return <Moviee 
             key={movie.id} 
             name={movie.name}
             ganre={movie.ganre}
             year={movie.year}
             image="https://shorturl.at/aefv9"
             >

             </Moviee>
        })}
      </div>
    )
  
}

export default Moviees;
