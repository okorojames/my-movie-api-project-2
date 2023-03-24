import React from "react";

const SearchMovie = ({ onSearchMovies }) => {
  return (
    <input
      type="text"
      placeholder="search movie"
      className="search-movie-input"
    />
  );
};

export default SearchMovie;
