import React from 'react'

const Dropdown = () => {
  return (
    <div className='bg-primary5 absolute  w-96 p-4 rounded-b-3xl group-hover:block hover:block hidden  md:-ml-60' >
      <ul className=''>
        <li className='text-slate-600  hover:text-primary2 px-20 py-4 text-center text-lg border-r-0 border-l-0 border-b-4 rounded-sm'>Update BioData</li>
        <li className='text-slate-600 hover:text-primary2 px-20 py-4 text-center text-lg border-r-0 border-l-0 border-b-4 rounded-sm'>Settings</li>
        
      </ul>
    </div>
  )
}

export default Dropdown
