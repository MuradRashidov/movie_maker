import React from 'react'

const AddMovie = () => {
  return (
    <div className='addMovie'>
        <form onSubmit={()=>alert("movie added")}>
            <label>Name</label>
            <input type='text' required></input>
            <label>Ganre</label>
            <input type='text' required></input>
            <label>Yaar</label>
            <input type='text' placeholder="(optional)"></input>
            <button type='submit'>Add Movie</button>
        </form>
    </div>
  )
}

export default AddMovie