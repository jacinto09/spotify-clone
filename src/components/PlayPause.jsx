import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
function Playpause ({ isPlaying, activeSong, song, handlePause, handlePlay }) {
  return (isPlaying && activeSong?.title === song.title
    ? <FaPauseCircle onClick={handlePause} size={35} className='text-gray-300' />
    : <FaPlayCircle onClick={handlePlay} size={35} className='text-gray-300' />
  )
}

export default Playpause
