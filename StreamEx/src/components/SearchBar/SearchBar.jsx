import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()

    const query = search.trim()

    if(!query) return

    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
