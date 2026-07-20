import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { useSearchParams } from "react-router-dom";
import tmdbApi from "../../services/tmdbApi";
import Loading from "../../components/Loading/Loading";
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("q");
  console.log(query);

  useEffect(() => {
    if (!query) return;

    const loadSearchResults = async () => {
      setLoading(true);

      try {
        const result = await tmdbApi.searchMovies(query);
        setMovies(result.results);
        console.log(result.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSearchResults();
  }, [query]);

  const resultLength = movies.length;

  if (loading) return <Loading />;

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchContainer}>
        <p className={styles.resultCount}>
          {resultLength > 0
            ? `Showing ${resultLength} results for "${query}"`
            : `No results found for "${query}"`}
        </p>
        <div className={styles.moviesContainer}>
          {movies.map((movie, key) => (
            <Link key={key} to={`/movie/${movie.id}`}>
              <div className={styles.movieItem}>
                <div className={styles.playOverlay}>
                  <FaPlay className={styles.playIcon} />
                </div>
                <img
                  className={styles.moviePoster}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
