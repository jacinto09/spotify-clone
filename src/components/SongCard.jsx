import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function SongCard ({ title, artist, image }) {
  const dispatch = useDispatch()
  const activeSong = true
  return (
    <article className='flex flex-col rounded-lg border w-[250px] p-4 bg-white/5 bg-opacity-80 cursor-pointer backdrop-blur-sm'>
      <div className='relative w-full h-54 group '>
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          Play/ pause
        </div>
        <img src={image} alt='song cover' />
      </div>
      <footer className=' mt-4 flex flex-col '>
        <p className='font-semibold text-lg text-white truncate'><Link to={`/songDetails/${title}`}>{title}</Link></p>
        <p className='text-sm truncate text-gray-300 mt-1'><Link to={`/artistDetails/${artist}`}>{artist}</Link></p>
      </footer>
    </article>
  )
}

export default SongCard
