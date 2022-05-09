import React from 'react'

import './Categories.css'
import { CategoriesData } from './CategoriesData'

const Categories = () => {
  return (
    <div className='categories-container'>
        <h3>Categories</h3>
        {
            CategoriesData.map(({}))
        }
    </div>
  )
}

export default Categories