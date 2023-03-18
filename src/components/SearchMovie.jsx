import React from "react";

const SearchMovie = ({ onSearchMovies }) => {
  return (
    <form className="search--movie--form" onChange={onSearchMovies}>
      <input
        type="text"
        placeholder="search movie"
        className="search-movie-input"
      />
      <input type="submit" value="Search" className="search-movie-btn" />
    </form>
  );
};

export default SearchMovie;
