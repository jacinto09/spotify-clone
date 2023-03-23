import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetSongsbySearchTermQuery } from '../redux/services/shazamApi'
import { Loader, Error, SongCard } from '../components'

function Search () {
  const { searchTerm } = useParams()
  const { isPlaying, activeSong } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsbySearchTermQuery(searchTerm)
  const songs = data?.tracks?.hits?.map(song => song.track)
  if (isFetching) return <Loader title='loading...' />
  if (error) return <Error />
  return (
    <main className='flex flex-col'>
      <div className=' w-full text-white p-6 flex justify-between items-center flex-col sm:flex-row mt-4'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Showing results for <span className='font-black'>{searchTerm}</span></h2>
      </div>
      <div className='w-full flex flex-wrap sm:justity-start justify-center gap-8 mt-8 '>
        {
        songs.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} i={i} data={data} />
        ))
  }
      </div>
    </main>
  )
}

export default Search
