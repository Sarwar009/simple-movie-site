import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
          <h3>< href='google.com'>Movie Lovers</h3>
          <form>
            <input type='text' name='movieSearch' className='search-box' placeholder='search'></input>
            <button type='submit' className='btn'>Search</button>
          </form>
        </div>
    </div>
  )
}

export default Header