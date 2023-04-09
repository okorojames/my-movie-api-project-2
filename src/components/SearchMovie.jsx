import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultImg.jpg";

const SearchMovie = () => {
  const [userInput, setUserInput] = useState();
  const [searchedMovie, setSearchedMovie] = useState();
  const [initialMsg, setInitialMsg] = useState("You might like These");
  // styled component
  const searchedMoviesStyles = {
    display: "grid",
    justifyItems: "center",
  };
  // fetching data
  async function getMovies() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=dc9d4f98&s=${userInput}`
    );
    const data = await response.json();
    setSearchedMovie(data.Search);
  }
  // submit user input
  function submitUserInput(e) {
    e.preventDefault();
    getMovies();
    setInitialMsg(null);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="search--movie--section">
      <form
        action=""
        className="search--movie--form"
        onSubmit={submitUserInput}
      >
        <input
          type="text"
          className="search--movie--input"
          placeholder="search"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <a
          href=""
          type="submit"
          style={{
            color: "#fff",
            background: "#e03131",
            padding: "10px 10px 10px 15px",
          }}
        >
          Search
        </a>
      </form>
      <div className="searched--movies--row" style={searchedMoviesStyles}>
        {searchedMovie &&
          searchedMovie.map((movie) => (
            <div
              className="searched--movies"
              key={movie.imdbID}
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/" state={{ movie }}>
                <div className="movie">
                  <div className="movie-image-container">
                    {movie.Poster === "N/A" ? (
                      <img src={defaultImg} alt="" className="movie-image" />
                    ) : (
                      <img src={movie.Poster} alt="" className="movie-image" />
                    )}
                  </div>
                  <div className="movie-title">
                    Title: <span className="movie-name">{movie.Title}</span>
                  </div>
                  <div
                    className="movie-genre"
                    style={{
                      color: "#fff",
                      opacity: ".2",
                      fontWeight: "200",
                      fontSize: "14px",
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {movie.Genre}
                  </div>
                  <div className="movie-date">
                    Released On:{" "}
                    <span className="movie--date">{movie.Released}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchMovie;
