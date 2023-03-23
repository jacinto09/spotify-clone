import { Route, Routes } from 'react-router-dom'
import { Sidebar, MusicPlayer } from './components'
import { Discover, TopArtists, TopCharts, AroundYou, SongDetails, Search, ArtistDetails } from './pages'
import { useSelector } from 'react-redux'

function App () {
  const { activeSong } = useSelector((state) => state.player)
  return (
    <main className='relative flex'>
      <Sidebar />
      <section className='w-full p-4 bg-gradient-to-br from-[#070028] to-[#121286]'>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/topCharts' element={<TopCharts />} />
          <Route path='/topArtists' element={<TopArtists />} />
          <Route path='/aroundYou' element={<AroundYou />} />
          <Route path='/songDetails/:songId' element={<SongDetails />} />
          <Route path='/search/:searchTerm' element={<Search />} />
          <Route path='/artists/:artistId' element={<ArtistDetails />} />
        </Routes>
      </section>
      {activeSong?.title && (
        <div className='absolute h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10'>
          <MusicPlayer />
        </div>
      )}
    </main>
  )
}

export default App
