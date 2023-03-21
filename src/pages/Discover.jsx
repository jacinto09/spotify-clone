import React, { useState, useEffect } from 'react'
import { genres } from '../assets/constants'
import useSelectedGenre from '../hooks/useSelectedGenre'
import SongCard from '../components/SongCard'
import { getChart } from '../services/shazamApi'
function Discover () {
  const { handleChange, selectedGenre } = useSelectedGenre()
  const [globalCharts, setGlobalCharts] = useState()
  const chartData = async () => {
    await getChart()
      .then(data => setGlobalCharts(data))
  }
  useEffect(() => {
    chartData()
    console.log(globalCharts)
  }, [])
  return (
    <main className='flex flex-col'>
      <div className='bg-blue-900 w-full text-white p-6 flex justify-between items-center flex-col sm:flex-row mt-4'>
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
       (globalCharts && globalCharts.length)
         ? (globalCharts.map(chart => {
             return <SongCard key={chart.key} title={chart.title} image={chart.images?.coverart} artist={chart.artists[0]?.alias} />
           }))
         : 'Loading...'
        }
      </div>
    </main>
  )
}

export default Discover
