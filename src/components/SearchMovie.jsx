import { useState } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultImg.jpg";

const SearchMovie = () => {
  const [userInput, setUserInput] = useState();
  const [inputValue, setInputValue] = useState(userInput);
  const [searchedMovie, setSearchedMovie] = useState();
  // submit user input
  function submitUserInput(e) {
    e.preventDefault();
    getMovies();
    setInputValue("");
  }
  // fetching data
  async function getMovies() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=dc9d4f98&t=${userInput}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setSearchedMovie(data);
  }
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
          value={inputValue}
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
      {searchedMovie && (
        <div className="searched--movies">
          <Link to="/more-info">
            <div className="movie">
              <div className="movie-image-container">
                <img
                  src={searchedMovie.Poster}
                  alt=""
                  className="movie-image"
                />
              </div>
              <div className="movie-title">
                Title: <span className="movie-name">{searchedMovie.Title}</span>
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
                {searchedMovie.Genre}
              </div>
              <div className="movie-date">
                Released On:{" "}
                <span className="movie--date">{searchedMovie.Released}</span>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
