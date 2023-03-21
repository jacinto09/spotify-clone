import React from 'react'
function SongCard ({ title, artist, image }) {
  return (
    <article className='flex flex-col justify-between items-center rounded-lg border w-[250px] bg-slate-400 cursor-pointer backdrop-blur-sm'>
      <img src={image} alt='song cover' />
      <footer className=' font-semibold text-gray-500 flex flex-col items-start justify-between text-sm border-t-gray-500 w-full p-4'>
        <p className='truncate'>{title}</p>
        <p className='truncate'>{artist}</p>
      </footer>
    </article>
  )
}

export default SongCard
