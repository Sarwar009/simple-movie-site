import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'

const Header = () => {

  
  return (
    <div className='header'>
        <div className='header-container'>
          <h3>Movie Lovers</h3>
          <form>
            <input type='text' name='movieSearch' className='search-box' placeholder='Search...'></input>
            <button type='submit' className='btn'>Search</button>
          </form>
        </div>

        <Navbar />

    </div>
  )
}

export default Header