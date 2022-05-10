import React from 'react'
import { Link } from 'react-router-dom'

const LastEntries = () => {
  return (
    <div>
        <div className='see-more'>
            <h3><span className='span'> </span>see all</h3>
            <Link to='/letestMovies' className='btn see-more-btn'>See More</Link>
        </div>
        <div>
          <div>
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