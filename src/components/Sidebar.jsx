import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaHashtag, FaUsers } from 'react-icons/fa'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'

function Sidebar () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <section className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] '>
        <Link to='/' className='flex flex-row justify-start items-center my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          <FaHome className='text-gray-400 hover:text-cyan-400 mr-2 text-lg' /> Discover
        </Link>
        <Link to='/topArtists' className='flex flex-row justify-start items-center my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          <FaUsers className='text-gray-400 hover:text-cyan-400 mr-2 text-lg' />Top Artist
        </Link>
        <Link to='/topCharts' className='flex flex-row justify-start items-center my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          <FaHashtag className='text-gray-400 hover:text-cyan-400 mr-2 text-lg' />Top Charts
        </Link>
      </section>
      <section className='absolute md:hidden block top-6 right-3'>
        {mobileMenuOpen
          ? (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><RiCloseLine className='w-4 h-4 text-white mr-2' /></button>
            )
          : <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><RiMenuLine className='w-4 h-4 text-white mr-2' /></button>}
      </section>
      <section className={`absolute top-0 h-screen w-2/3 bg-gradiente-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <Link to='/' className='flex flex-row justify-start items-center my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          <FaHome className='text-gray-400 hover:text-cyan-400 mr-2 text-lg' /> Discover
        </Link>
        <Link to='/topArtists' className='flex flex-row justify-start items-center my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          <FaUsers className='text-gray-400 hover:text-cyan-400 mr-2 text-lg' />Top Artist
        </Link>
        <Link to='/topCharts' className='flex flex-row justify-start items-center my-8 text-sm text-gray-400 font-medium  hover:text-cyan-400'>
          <FaHashtag className='text-gray-400 hover:text-cyan-400 mr-2 text-lg' />Top Charts
        </Link>
      </section>
    </>
  )
}

export default Sidebar
