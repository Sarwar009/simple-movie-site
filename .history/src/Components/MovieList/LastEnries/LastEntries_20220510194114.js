import React from 'react'
import { Link } from 'react-router-dom'

import from './lastEntries.css'

const LastEntries = () => {
  return (
    <div className='last-entries-container'>
        <div className='see-more'>
            <h3><span className='span'> </span>Last Entries</h3>
            <Link to='/letestMovies' className='btn see-more-btn'>See More</Link>
        </div>
        <div className='l-e-content'>
          <div className='l-e-item'>
            <div>
              <span>5</span><span>AUGUST</span>
            </div>
            <div>
              <h3>(IDM) Google Drive Link Expire Solution</h3>
              <p>Lorem ipsum dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus</p>
            </div>
          </div>
          <div>
            <div>
              <span>5</span><span>AUGUST</span>
            </div>
            <div>
              <h3>(IDM) Google Drive Link Expire Solution</h3>
              <p>Lorem ipsum dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LastEntries