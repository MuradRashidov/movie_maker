import React from 'react'

const Moviee = (props) => {
  return (
    <div className='card'>
        <div className='container'>
            <img alt='asd' width="100%"  height="270px" src={props.image}></img>
            <h2>{props.name}</h2>
            <h4>{props.ganre} - {props.year}</h4>
        </div>
    </div>
  )
}

export default Moviee