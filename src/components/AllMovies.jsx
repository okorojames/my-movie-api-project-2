import React, { useEffect, useState } from "react";
import vidIntro from "../video/vid-intro.mp4";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultImg.jpg";
import loaderGif from "../images/loader.gif";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState();
  const [loader, setLoader] = useState();
  //fetching data
  async function getAllMovies() {
    const res1 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=1"
    );
    const data1 = await res1.json();
    const res2 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=2"
    );
    const data2 = await res2.json();
    const res3 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=1"
    );
    const data3 = await res3.json();
    const res4 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=5"
    );
    const data4 = await res4.json();
    const res5 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=10"
    );
    const data5 = await res5.json();
    const res6 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=6"
    );
    const data6 = await res6.json();
    const res7 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=12"
    );
    const data7 = await res7.json();
    const res8 = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=7"
    );
    const data8 = await res8.json();
    const res9 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=20"
    );
    const data9 = await res9.json();
    const res10 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=8"
    );
    const data10 = await res10.json();
    // all datas
    const allMovieData = [
      ...data1.results,
      ...data2.results,
      ...data3.results,
      ...data4.results,
      ...data5.results,
      ...data6.results,
      ...data7.results,
      ...data8.results,
      ...data9.results,
      ...data10.results,
    ];
    if (allMovieData) {
      setLoader(false);
    }
    setAllMovies(allMovieData);
  }
  //
  //
  useEffect(() => {
    setLoader(true);
    getAllMovies();
  }, []);
  //
  return (
    <div className="all--movies--section" style={{ marginTop: "80px" }}>
      <div
        className="all--movies--first--content"
        style={{ marginBottom: "60px" }}
      >
        <div className="all--header--videos">
          <video
            src={vidIntro}
            autoPlay
            muted
            loop
            className="all--movie--video"
            controlsList="nodownload"
            style={{ pointerEvents: "none" }}
          ></video>
          <div className="video--overlay">
            <h2 className="video--overlay--h2">All our available movies</h2>
          </div>
        </div>
      </div>
      {loader && loader ? (
        <img
          src={loaderGif}
          alt=""
          style={{
            width: "150px",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        />
      ) : null}
      {/* movies here */}
      <div className="all--movies--col">
        {allMovies &&
          allMovies.map((movie, index) => (
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
                  Title:{" "}
                  <span className="movie-name">
                    {movie.name || movie.title || movie.original_title}
                  </span>
                </div>
                <div className="movie-date">
                  Released On:{" "}
                  <span className="movie--date">
                    {movie.first_air_date || movie.release_date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllMovies;
