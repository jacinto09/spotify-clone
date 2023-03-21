import { Route, Routes } from 'react-router-dom'
import { Sidebar, Musicplayer } from './components'
import { Discover, TopArtists, TopCharts, AroundYou } from './pages'

function App () {
  return (
    <main className='relative flex'>
      <Sidebar />
      <section className='w-full '>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/topCharts' element={<TopCharts />} />
          <Route path='/topArtists' element={<TopArtists />} />
          <Route path='/aroundYou' element={<AroundYou />} />

        </Routes>
      </section>
      <Musicplayer />
    </main>
  )
}

export default App
