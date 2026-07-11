import React, { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdbApi";
import MovieSection from "../../components/MovieSection/MovieSection";
import styles from "./Home.module.css";
import BannerMovie from "../../components/BannerMovie/BannerMovie";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdbApi.getHomeList();
      setMovieList(list);
      console.log(list)

      const popularCategory = list.find((item) => item.slug === "popular");
      const randomIndex = Math.floor(
        Math.random() * popularCategory.items.results.length,
      );
      const chosenMovie = popularCategory.items.results[randomIndex];

      const movieInfo = await tmdbApi.getMovieInfo(chosenMovie.id);
      setBannerMovie(movieInfo);
      console.log(movieInfo);
    };

    loadAll();
  }, []);

  if(!bannerMovie) {
    return <Loading />
  }

  return (
    <>
      {bannerMovie && <BannerMovie movie={bannerMovie} />}
      <div className={styles.movieListSection}>
        {movieList.map((list) => (
          <MovieSection
            key={list.slug}
            title={list.title}
            icon={list.icon}
            items={list.items.results}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
