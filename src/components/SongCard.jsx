import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import PlayPause from './PlayPause'
function SongCard ({ song, isPlaying, activeSong, i, data }) {
  const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }
  return (
    <article className='flex flex-col rounded-lg w-[250px] p-4 bg-white/5 bg-opacity-80 cursor-pointer backdrop-blur-sm'>
      <div className='relative w-full h-54 group '>
        {data &&
          <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
            <PlayPause
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          </div>}
        <img src={song.images?.coverart} alt='song_cover' />
      </div>
      <footer className=' mt-4 flex flex-col '>
        <p className='font-semibold text-lg text-white truncate'><Link to={`/songDetails/${song?.key}`}>{song.title}</Link></p>
        <p className='text-sm truncate text-gray-300 mt-1'><Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/topArtists'}>{song.artists[0]?.alias || song.subtitle}</Link></p>
      </footer>
    </article>
  )
}

export default SongCard
