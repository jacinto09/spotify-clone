import React from 'react'
import { useGetRelatedSongsBySongIdQuery } from '../redux/services/shazamApi'
import SongCard from './SongCard'
function RelatedSongs ({ id }) {
  const { data } = useGetRelatedSongsBySongIdQuery(id)
  return (
    <div className='w-full flex flex-wrap sm:justity-start justify-center gap-8 mt-8 '>
      {
        data?.tracks?.map(track =>
          <SongCard key={track.key} song={track} />
        )
      }
    </div>
  )
}

export default RelatedSongs
