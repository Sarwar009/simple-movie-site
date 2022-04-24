import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h3>Movie Lovers</h3>
        <form>
          <input type='search' name='movieSearch'>Search</input>
        </form>
    </div>
  )
}

export default Header