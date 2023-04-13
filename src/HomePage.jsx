import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultImg from "./images/defaultImg.jpg";

const HomePage = ({ movies, movies1 }) => {
  return (
    <div className="home-page-holder">
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
              <Link
                to={`/movie/${movie1.id}`}
                state={{ movie: movie1 }}
                key={index}
              >
                <div className="movie">
                  <div className="movie-image-container">
                    {
                      <img
                        src={`https://themoviedb.org/t/p/w220_and_h330_face${movie1.poster_path}`}
                        alt=""
                        className="movie-image"
                      />
                    }
                  </div>
                  <div className="movie-title">
                    Title: <span className="movie-name">{movie1.title}</span>
                  </div>
                  <div className="movie-date">
                    Released On:
                    <span className="movie--date">
                      &nbsp;{movie1.release_date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Home ccol 2 */}
        <div className="homepage-col-2">
          <h2
            className="col--2--h2"
            style={{
              justifySelf: "end",
              marginRight: "8px",
              fontWeight: "400",
              color: "#e0313080",
              position: "absolute",
              top: "1%",
            }}
          >
            Released
          </h2>
          {movies.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} state={{ movie }} key={index}>
              <div className="movie">
                <div className="movie-image-container">
                  {movie.poster_path === null ? (
                    <img src={defaultImg} alt="" className="movie-image" />
                  ) : (
                    <img
                      src={`https://themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt=""
                      className="movie-image"
                    />
                  )}
                </div>
                <div className="movie-title">
                  Title: <span className="movie-name">{movie.name}</span>
                </div>
                <div className="movie-date">
                  Released On:{" "}
                  {(
                    <span className="movie--date">{movie.first_air_date}</span>
                  ) || (
                    <span className="movie--date">{movie.release_date}</span>
                  )}
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
