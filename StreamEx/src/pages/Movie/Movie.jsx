import React, { useEffect, useState } from "react";
import styles from "./Movie.module.css";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdbApi";
import {
  FaPlay,
  FaStar,
  FaCalendar,
  FaStopwatch,
  FaInfo,
} from "react-icons/fa";
import Loading from "../../components/Loading/Loading";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const loadMovie = async () => {
      const movieInfo = await tmdbApi.getMovieInfo(id);
      setMovie(movieInfo);
    };

    loadMovie();
  }, [id]);

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className={styles.moviePage}>
      <div className={styles.backgroundWrapper}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className={styles.overlay}></div>
      </div>
      {movie && (
        <div className={styles.movieInfoPlay}>
          <div className={styles.playButtonContainer}>
            <button className={styles.playButton}>
              <FaPlay />
            </button>
          </div>

          <div className={styles.movieInfoContainer}>
            <div className={styles.moviePoster}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className={styles.movieInfo}>
              <div>
                <h1 className={styles.movieTitle}>{movie.title}</h1>
                <p className={styles.tagline}>{movie.tagline}</p>
              </div>

              <div className={styles.productionCompanies}>
                {movie.production_companies?.map((company) => (
                  <span key={company.id} className={styles.productionCompany}>
                    {company.name}
                  </span>
                ))}
              </div>

              <div className={styles.movieMetaGenre}>
                <span className={styles.voteAverage}>
                  <FaStar />
                  {movie.vote_average.toFixed(1)}/10
                </span>
                <span className={styles.releaseDate}>
                  <FaCalendar />
                  {movie.release_date.split("-")[0]}
                </span>
                <span className={styles.runtime}>
                  <FaStopwatch />
                  {movie.runtime} min
                </span>
                <span className={styles.genre}>
                  Genre: {movie.genres?.map((genre) => genre.name).join(" / ")}
                </span>
              </div>

              <p className={styles.movieOverview}>{movie.overview}</p>

              <div className={styles.starring}>
                <h3>Starring</h3>
                <div className={styles.actorList}>
                  {movie.credits.cast?.slice(0, 5).map((actor) => (
                    <div key={actor.id} className={styles.actor}>
                      <img
                        src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                        alt={actor.name}
                      />
                      <p>{actor.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
