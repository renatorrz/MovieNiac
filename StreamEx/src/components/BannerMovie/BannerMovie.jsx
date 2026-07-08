import React from "react";
import styles from "./BannerMovie.module.css";
import { FaPlay, FaStar, FaStopwatch, FaCalendar, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerMovie = ({ movie }) => {
  return (
    <div className={styles.bannerMovieContainer}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : ""
          }
          alt={movie.title}
        />

        <div className={styles.overlay}></div>
        <div className={styles.overlay2}></div>

        <div className={styles.movieInfoContainer}>
          <div>
            <h1 className={styles.movieTitle}>{movie.title}</h1>
            {/* <p className={styles.tagline}>{movie.tagline}</p> */}
          </div>

          <div className={styles.movieMeta}>
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
          </div>
          <span className={styles.genre}>
            {movie.genres?.map((genre) => genre.name).join(" / ")}
          </span>

          <p className={styles.movieOverview}>{movie.overview}</p>

          <div className={styles.movieActions}>
            {/* Add action buttons here */}
            <button className={styles.watchButton}>
              <FaPlay /> Watch
            </button>

            <Link to={`/movie/${movie.id}`}>
              <button className={styles.moreInfoButton}>
                <FaInfo /> More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMovie;
