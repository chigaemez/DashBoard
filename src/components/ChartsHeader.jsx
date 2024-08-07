
import React from 'react'

const ChartsHeader = ({category, title}) => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <div>
        <p className='text-lg text-gray-400'>Chart</p>
        <p className='text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900'>{category}</p>
      </div>
      <p className='text-center dark:text-gray-200 text-xl mb-2 mt-3'>{title}</p>

      
    </div>
  )
}

export default ChartsHeader
