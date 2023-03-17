import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  const [movies1, setMovies1] = useState();
  const [movies, setMovies] = useState();
  // getting the movie data
  async function getMovies() {
    // data one
    const res1 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=1"
    );
    const data1 = await res1.json();
    //
    // data two
    const res2 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=2"
    );
    const data2 = await res2.json();
    //
    // data three
    const res3 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=3"
    );
    const data3 = await res3.json();
    //
    // Combining the data 1 and data 2 together
    const allData = [...data1.results, ...data2.results, ...data3.results];
    //
    setMovies(allData);
    setMovies1(data3.results);
  }
  // end getting the movie data
  //
  // useEffect which helps makes the movie data load and fetch before page contents even display
  useEffect(() => {
    getMovies();
  }, []);
  //
  return (
    <div className="App">
      <Header />
      {movies && <HomePage movies={movies} movies1={movies1} />}
    </div>
  );
}

export default App;
