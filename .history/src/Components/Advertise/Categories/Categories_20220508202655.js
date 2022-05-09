import React from 'react'
import { Link } from 'react-router-dom'

import './Categories.css'
import { CategoriesData } from './CategoriesData'

const Categories = () => {
  return (
    <div className='categories-container'>
        <h3>Categories</h3>
        {
            CategoriesData.map(({title, link}, index) => {
                return (
                    <div
                )
            })
        }
    </div>
  )
}

export default Categories