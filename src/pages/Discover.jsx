import React from 'react'
import { genres } from '../assets/constants'
import { SongCard, Loader, Error } from '../components'
import { useGetSongsByGenreQuery } from '../redux/services/shazamApi'
import { selectGenreListId } from '../redux/features/playerSlice'
import { useSelector, useDispatch } from 'react-redux'
function Discover () {
  const dispatch = useDispatch()
  const { isPlaying, activeSong, genreListId } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'genre-global-chart-1')
  if (isFetching) return <Loader title='loading...' />
  if (error) return <Error />
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title
  return (
    <main className='flex flex-col'>
      <div className=' w-full text-white p-6 flex justify-between items-center flex-col sm:flex-row mt-4'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover {genreTitle || 'Pop'}</h2>
        <select
          name='selectGenre'
          value={genreListId || 'pop'}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          className='bg-black outline-none text-sm p-3 rounded-lg text-gray-300 mt-5 sm:mt-0'
        >
          {genres.map(genre =>
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          )}
        </select>
      </div>
      <div className='w-full flex flex-wrap sm:justity-start justify-center gap-8 mt-8'>
        {
        data?.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} i={i} data={data} />
        ))
}
      </div>
    </main>
  )
}

export default Discover
