import { useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo-no-bg.png";
import SearchMovie from "./SearchMovie";

const Header = ({ onSearchMovies }) => {
  // useRef variables
  const nav_links = useRef();
  const burger_one = useRef();
  const burger_two = useRef();
  const burger_three = useRef();
  //
  function toggleNav() {
    nav_links.current.classList.toggle("nav-toggle");
    burger_one.current.classList.toggle("nav--toggle");
    burger_two.current.classList.toggle("nav--toggle");
    burger_three.current.classList.toggle("nav--toggle");
  }
  return (
    <header>
      <nav>
        <img src={logoImg} alt="" className="nav-logo" />
        <div className="nav-links" ref={nav_links}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="all-movies" className="nav-link">
            All Movies
          </Link>
          <Link to="popular" className="nav-link">
            Popular
          </Link>
          <Link to="tv-shows" className="nav-link">
            Tv Shows
          </Link>
          <Link to="all-movies" className="nav-link create-account-nav-btn">
            Create Account
          </Link>
          <Link to="all-movies" className="nav-link login-nav-btn">
            Login
          </Link>
        </div>
        {/* hamburger */}
        <div className="hamburger" onClick={toggleNav}>
          <div className="burger burger--one" ref={burger_one}></div>
          <div className="burger burger--two" ref={burger_two}></div>
          <div className="burger burger--three" ref={burger_three}></div>
        </div>
      </nav>
      {/* <SearchMovie onSearchMovies={onSearchMovies} /> */}
    </header>
  );
};

export default Header;
