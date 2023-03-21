import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar () {
  return (
    <section className='h-screen w-40 flex flex-col bg-cyan-700 justify-center items-center gap-8'>
      <Link to='/'>
        Discover
      </Link>
      <Link to='/topArtists'>
        Top Artist
      </Link>
      <Link to='/topCharts'>
        Top Charts
      </Link>
      <Link to='/aroundYou'>
        Around You
      </Link>
    </section>
  )
}

export default Sidebar
