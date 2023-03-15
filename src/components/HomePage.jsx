import React from "react";
import defaultImg from "../images/spidey.jpeg";

const HomePage = ({ movies }) => {
  console.log(movies);
  return (
    <main className="home-page">
      {/* Home ccol 1 */}
      <div className="home-page-col-1">
        <div className="home-col-1-context-1">
          <p className="home-paragraph-1">New Trailers</p>
          <p className="home-paragraph-2">
            sort by <span className="date-filter">Today</span>
          </p>
        </div>
      </div>
      {/* Home ccol 2 */}
      <div className="homepage-col-2">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`https://themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt=""
              className="movie-image"
            />
            <div className="movie-title">{movie.name}</div>
            <div className="movie data">
              Released On: {movie.first_air_date}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
