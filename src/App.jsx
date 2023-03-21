import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components'
import { Discover, TopArtists, TopCharts, AroundYou, SongDetails, Search, ArtistDetails } from './pages'

function App () {
  return (
    <main className='relative flex '>
      <Sidebar />
      <section className='w-full p-4'>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/topCharts' element={<TopCharts />} />
          <Route path='/topArtists' element={<TopArtists />} />
          <Route path='/aroundYou' element={<AroundYou />} />
          <Route path='/songs/:songId' element={<SongDetails />} />
          <Route path='/search/:searchTerm' element={<Search />} />
          <Route path='/artists/:artistId' element={<ArtistDetails />} />

        </Routes>
      </section>
      {/* <Musicplayer /> */}
    </main>
  )
}

export default App
