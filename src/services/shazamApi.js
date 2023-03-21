const URL = 'https://shazam.p.rapidapi.com/charts/track'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '90a0f4b832msh8074fb5065a3f7dp111486jsn41c39244bcf9',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
}
async function getChart () {
  return fetch(URL, options)
    .then(response => response.json())
    .then(data => {
      return data.tracks
    })
}
export { getChart }
