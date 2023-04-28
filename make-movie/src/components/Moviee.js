import React from 'react'

const Moviee = (props) => {
  return (
    <div className='card'>
        <div className='container'>
            <img alt='asd' width="100%"  height="270px" src={props.image}></img>
            <h3>{props.name}</h3>
            <h4>{props.ganre} - {props.year}</h4>
        </div>
    </div>
  )
}

export default Moviee