import React from 'react'
import styles from './movieSection.module.css'
import { Link } from 'react-router-dom'

const MovieSection = ({title, items}) => {
  return (
    <div className={styles.movieSection}>
      <h2 className={styles.movieSectionTitle}>{title}</h2>
      <div className={styles.movieList}>
        {items.map((movie, key) => (
          <Link key={key} to={`/movie/${movie.id}`}>
            <div className={styles.movieItem}>
              <img className={styles.moviePoster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MovieSection;