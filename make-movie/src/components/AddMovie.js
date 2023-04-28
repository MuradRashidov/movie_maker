import React, { useState } from 'react';
import { addMovie, allMovies } from '../queries/queries';
import { useMutation } from 'react-apollo';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const [addMovieMutation, { loading, error }] = useMutation(addMovie, {
    onCompleted: () => {
      setName('');
      setGenre('');
      setYear('');
    },
    refetchQueries: [{ query: allMovies }],
  });

  const submitMovie = (event) => {
    
    event.preventDefault();
    addMovieMutation({ variables: { name, genre, year } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(addMovieMutation,1)

  return (
    <div className='addMovie' id='form'>
      <form onSubmit={submitMovie}>
        <label>Name</label>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name} required />
        <label>Genre</label>
        <input type='text' onChange={(e) => setGenre(e.target.value)} value={genre} required />
        <label>Year</label>
        <input type='text' onChange={(e) => setYear(e.target.value)} value={year} placeholder='(optional)' />
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
