import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countries } from '../assets/constants'
import { Error, Loader, SongCard } from '../components'
import { useGetSongsByGenreQuery } from '../redux/services/shazamApi'
import { selectGenreListId } from '../redux/features/playerSlice'
function TopCharts () {
  const dispatch = useDispatch()
  const { isPlaying, activeSong, genreListId } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'ip-country-chart-ES')
  if (isFetching) return <Loader title='loading...' />
  if (error) return <Error />
  const countryTitle = countries.find(({ value }) => value === genreListId)?.title
  return (
    <main className='flex flex-col'>
      <div className=' w-full text-white p-6 flex justify-between items-center flex-col sm:flex-row mt-4'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Top Songs {countryTitle || 'España'}</h2>
        <select
          name='selectGenre'
          value={genreListId || 'España'}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          className='bg-black outline-none text-sm p-3 rounded-lg text-gray-300 mt-5 sm:mt-0'
        >
          {countries.map(country =>
            <option value={country.value} key={country.value}>
              {country.title}
            </option>
          )}
        </select>
      </div>
      <div className='w-full flex flex-wrap sm:justity-start justify-center gap-8 mt-8 '>
        {
        data?.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} i={i} data={data} />
        ))
}
      </div>
    </main>
  )
}

export default TopCharts
