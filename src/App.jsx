import { Route, Routes } from 'react-router-dom'
import { Sidebar, MusicPlayer, SearchBar } from './components'
import { Discover, TopCharts, SongDetails, Search, ArtistDetails } from './pages'
import { useSelector } from 'react-redux'

function App () {
  const { activeSong } = useSelector((state) => state.player)
  return (
    <main className='relative flex'>
      <Sidebar />
      <section className='flex-1 flex flex-col bg-gradient-to-br from-[#191624] to-[#121286]'>
        <SearchBar />
        <section className='px-6 h-[calc(100vh-72px)] overflow-y-scroll  hide-scrollbar flex xl:flex-row flex-col-reverse'>
          <article className='flex-1 h-fit pb-40'>
            <Routes>
              <Route path='/' element={<Discover />} />
              <Route path='/topCharts' element={<TopCharts />} />
              <Route path='/songDetails/:songId' element={<SongDetails />} />
              <Route path='/search/:searchTerm' element={<Search />} />
              <Route path='/artists/:artistId' element={<ArtistDetails />} />
            </Routes>
          </article>
        </section>
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
