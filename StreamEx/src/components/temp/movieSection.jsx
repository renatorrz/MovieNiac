import React from 'react'
import styles from './MovieSection.module.css'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

// Componente de seção de filmes
const MovieSection = ({title, icon: Icon, items}) => {
  return (
    <div className={styles.movieSection}>
      <h2 className={styles.movieSectionTitle}>
        <Icon className={styles.movieSectionIcon} /> {title}
      </h2>
      <div className={styles.movieList}>
        {items.map((movie, key) => (
          <Link key={key} to={`/movie/${movie.id}`}>
            <div className={styles.movieItem}>
              <div className={styles.playOverlay}>
                <FaPlay className={styles.playIcon} />
              </div>
              <img className={styles.moviePoster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MovieSection;