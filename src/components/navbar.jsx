/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Navbar({list}) {
  const listCon = list.length === 0 ? 'text-red-600' : 'text-green-600'
  return (
    <div className='h-24 bg-stone-500 items-center flex p-4 justify-between font-sans'>
        <h1 className='text-4xl text-white'>Navbar</h1>
        <p className={`text-3xl font-mono ${listCon} bg-amber-100 p-2 bg-opacity-2 rounded-xl`}>{list.length}</p>
    </div>
  )
}

export default Navbar