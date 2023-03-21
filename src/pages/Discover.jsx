import React from 'react'
import { genres } from '../assets/constants'
import useSelectedGenre from '../hooks/useSelectedGenre'
import { SongCard, Loader, Error } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamApi'
import { useDispatch, useSelector } from 'react-redux'
function Discover () {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery()
  const { handleChange, selectedGenre } = useSelectedGenre()
  if (isFetching) return <Loader title='loading...' />
  if (error) return <Error />
  return (
    <main className='flex flex-col'>
      <div className=' w-full text-white p-6 flex justify-between items-center flex-col sm:flex-row mt-4'>
        <h2 className='font-bold text-3xl text-white text-left'>Discover {selectedGenre}</h2>
        <select
          name='selectGenre'
          value={selectedGenre}
          onChange={handleChange}
          className='bg-black outline-none text-sm p-3 rounded-lg text-gray-300 mt-5 sm:mt-0'
        >
          {genres.map(genre =>
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          )}
        </select>
      </div>
      <div className='w-full flex flex-wrap sm:justity-start justify-center gap-8 mt-8 '>
        {
        (data?.tracks.map(chart => {
          return <SongCard key={chart.key} title={chart.title} image={chart.images?.coverart} artist={chart.artists[0]?.alias} />
        }))
        }
      </div>
    </main>
  )
}

export default Discover
