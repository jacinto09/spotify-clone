import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <section className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] '>
        <Link to='/' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Discover
        </Link>
        <Link to='/topArtists' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Top Artist
        </Link>
        <Link to='/topCharts' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Top Charts
        </Link>
        <Link to='/aroundYou' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Around You
        </Link>
      </section>
      <section className='absolute md:hidden block top-6 right-3'>
        {mobileMenuOpen
          ? (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>x</button>
            )
          : <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>o</button>}
      </section>
      <section className={`absolute top-0 h-screen w-2/3 bg-gradiente-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <Link to='/' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Discover
        </Link>
        <Link to='/topArtists' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Top Artist
        </Link>
        <Link to='/topCharts' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Top Charts
        </Link>
        <Link to='/aroundYou' className='flex flex-row justify-start items-baseline my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          Around You
        </Link>
      </section>
    </>
  )
}

export default Sidebar
