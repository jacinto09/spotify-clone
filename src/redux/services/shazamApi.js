import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '90a0f4b832msh8074fb5065a3f7dp111486jsn41c39244bcf9')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/track?listId=${genre}` }),
    getSongsById: builder.query({ query: (id) => `/songs/get-details?key=${id}` }),
    getSongsbySearchTerm: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }),
    getRelatedSongsBySongId: builder.query({ query: (id) => `/songs/list-recommendations?key=${id}` })
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByIdQuery,
  useGetSongsbySearchTermQuery,
  useGetRelatedSongsBySongIdQuery
} = shazamApi
