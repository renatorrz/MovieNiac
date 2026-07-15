const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
import {
  FaFire,
  FaChartLine,
  FaBomb,
  FaLaugh,
  FaGhost,
  FaRocket,
  FaBook,
} from "react-icons/fa";

const basicFetch = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "popular",
        icon: FaFire,
        title: "Popular",
        items: await basicFetch("/movie/popular?language=en"),
      },
      {
        slug: "trending",
        icon: FaChartLine,
        title: "Trending this week",
        items: await basicFetch("/trending/all/week?language=en"),
      },
      {
        slug: "action",
        icon: FaBomb,
        title: "Action",
        items: await basicFetch("/discover/movie?with_genres=28&language=en"),
      },
      {
        slug: "comedy",
        icon: FaLaugh,
        title: "Comedy",
        items: await basicFetch("/discover/movie?with_genres=35&language=en"),
      },
      {
        slug: "horror",
        icon: FaGhost,
        title: "Horror",
        items: await basicFetch("/discover/movie?with_genres=27&language=en"),
      },
      {
        slug: "sci-fi",
        icon: FaRocket,
        title: "Science Fiction",
        items: await basicFetch("/discover/movie?with_genres=878&language=en"),
      },
      {
        slug: "documentary",
        icon: FaBook,
        title: "Documentary",
        items: await basicFetch("/discover/movie?with_genres=99&language=en"),
      },
    ];
  },
  getMovieInfo: async (movieId) => {
    return await basicFetch(
      `/movie/${movieId}?language=en&append_to_response=credits`,
    );
  },
  searchMovies: async (query) => {
    return await basicFetch(`/search/movie?query=${encodeURIComponent(query)}&language=en`);
  }
};
