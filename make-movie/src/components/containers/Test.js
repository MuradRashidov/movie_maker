import React from 'react'
//import React, { Component } from 'react';
import Moviee from '../Moviee';
import { gql } from 'apollo-boost';
import {graphql, useQuery} from 'react-apollo'
const allMovies = gql`
   {
    movies{
       name
       genre
       year
    }
   }
`
const Test = () => {
    let {data} = useQuery(allMovies)
    console.log(data);
  return (
    <div>Test</div>
  )
}

export default Test