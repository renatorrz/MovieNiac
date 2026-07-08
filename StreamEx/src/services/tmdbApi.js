  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  const basicFetch = async (endpoint) => {
    const res = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`)

    if(!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return data
  }

  export default {
    getHomeList: async () => {
      return [
        {
          slug: 'popular',
          title: 'Popular',
          items: await basicFetch('/movie/popular?language=en')
        },
        {
          slug: 'trending',
          title: 'Trending this week',
          items: await basicFetch('/trending/all/week?language=en')
        },
        {
          slug: 'action',
          title: 'Action',
          items: await basicFetch('/discover/movie?with_genres=28&language=en')
        },
        {
          slug: 'comedy',
          title: 'Comedy',
          items: await basicFetch('/discover/movie?with_genres=35&language=en')
        },
        {
          slug: 'horror',
          title: 'Horror',
          items: await basicFetch('/discover/movie?with_genres=27&language=en')
        },
        {
          slug: 'sci-fi',
          title: 'Science Fiction',
          items: await basicFetch('/discover/movie?with_genres=878&language=en')
        },
        {
          slug: 'documentary',
          title: 'Documentary',
          items: await basicFetch('/discover/movie?with_genres=99&language=en')
        }
      ]
    },
    getMovieInfo: async (movieId) => {
      return await basicFetch(`/movie/${movieId}?language=en&append_to_response=credits`)
    }
  }