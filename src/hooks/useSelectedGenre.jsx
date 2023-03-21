import { useState } from 'react'
const useSelectedGenre = (e) => {
  const [selectedGenre, setSelectedGenre] = useState('Pop')
  const handleChange = (e) => {
    setSelectedGenre(e.target.value)
  }
  return { handleChange, selectedGenre }
}
export default useSelectedGenre
