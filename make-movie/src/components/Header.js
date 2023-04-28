import React from 'react';
import {HashLink} from 'react-router-hash-link';


const Header = () => {
  return (
    <div className="topnav">
       <a className="logo" href='/'>Movie maker</a>
       <div className="search-container">
        <form>
            <HashLink smooth to='#form'>Add Movie</HashLink>
            <input type='text' placeholder='Search..' name='search' />
            <button type='submit'><i className='fa fa-search'></i></button>

            
        </form>
       </div>
    </div>
  )
}

export default Header