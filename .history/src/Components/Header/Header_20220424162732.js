import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h3>Movie Lovers</h3>
        <form>
          <input type='search' name='movieSearch' className='search-box' placeholder=''></input>
          <button type='submit' className='btn'>Search</button>
        </form>
    </div>
  )
}

export default Header