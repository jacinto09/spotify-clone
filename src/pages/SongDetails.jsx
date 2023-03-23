import React from 'react'
import { useParams } from 'react-router-dom'
import { Error, Loader, SongCard } from '../components'
import { useGetSongsByIdQuery } from '../redux/services/shazamApi'

function SongDetails () {
  const { songId } = useParams()
  const { data, isFetching, error } = useGetSongsByIdQuery(songId)
  if (isFetching) return <Loader title='loading...' />
  if (error) return <Error />
  return (
    <main className='flex flex-col'>
      <div className=' w-full text-white p-6 flex justify-between items-center flex-col sm:flex-row mt-4'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'><span className='font-black'>{data.title} by {data.subtitle}</span></h2>
      </div>
      <div className='w-full flex flex-wrap sm:justity-start justify-center gap-8 mt-8 '>
        <SongCard key={data.key} song={data} />
      </div>
      <h1 className='text-white text-2xl mt-10 text-center'>
        Lyrics
      </h1>
      <div className='text-white mt-10 p-4'>
        {data
          ? data.sections[1]?.text.map((text, i) => {
            return <span key={i}>{i === 0 ? text : text.toLowerCase()} </span>
          })
          : <h2>No se han encontrado letras</h2>}
      </div>
    </main>
  )
}

export default SongDetails
