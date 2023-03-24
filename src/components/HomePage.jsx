import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/spidey.jpeg";

const HomePage = ({ movies, movies1 }) => {
  console.log(movies);
  // state for the search function
  const [search, setSearch] = useState("");
  console.log(search);
  //
  return (
    <div className="home-page-holder">
      <input
        type="text"
        placeholder="search movie"
        className="search-movie-input"
        onChange={(e) => setSearch(e.target.value)}
      />
      <main className="home-page">
        {/* Home ccol 1 */}
        <div className="home-page-col-1">
          <div className="home-col-1-context-1">
            <p className="home-paragraph-1">New Trailers</p>
            <div className="home-paragraph-2">
              sort by:&nbsp;&nbsp;
              <div className="sort-by-icons">
                <i className="ri-arrow-up-s-fill sort-by-icon"></i>
                <i className="ri-arrow-down-s-fill sort-by-icon"></i>
              </div>
            </div>
          </div>
          <div className="home-col-1-context-2">
            <p className="day-sort">Upcoming!</p>
          </div>
          <div className="home-col-1-items">
            {movies1.map((movie1, index) => (
              <Link to="/more-info" key={index}>
                <div className="movie">
                  <div className="movie-image-container">
                    <img
                      src={`https://themoviedb.org/t/p/w220_and_h330_face${movie1.poster_path}`}
                      alt=""
                      className="movie-image"
                    />
                  </div>
                  <div className="movie-title">
                    Title: <span className="movie-name">{movie1.name}</span>
                  </div>
                  <div className="movie-date">
                    Released On:
                    <span className="movie--date">&nbsp;Upcoming</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Home ccol 2 */}
        <div className="homepage-col-2">
          {movies &&
            movies
              .filter((movie) => {
                if (search === "") return movie;
                else if (
                  movie.name.toLowerCase().includes(search.toLowerCase())
                )
                  return movie;
              })
              .map((movie, index) => (
                <Link to="/more-info" key={index}>
                  <div className="movie">
                    <div className="movie-image-container">
                      <img
                        src={`https://themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                        alt=""
                        className="movie-image"
                      />
                    </div>
                    <div className="movie-title">
                      Title: <span className="movie-name">{movie.name}</span>
                    </div>
                    <div className="movie-date">
                      Released On:{" "}
                      <span className="movie--date">
                        {movie.first_air_date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
