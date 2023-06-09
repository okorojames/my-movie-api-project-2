import { useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo-no-bg.png";

const Header = ({}) => {
  // useRef variables
  const nav_links = useRef();
  const burger_one = useRef();
  const burger_two = useRef();
  const burger_three = useRef();
  const navOverlay = useRef();
  //
  function toggleNav() {
    nav_links.current.classList.toggle("nav-toggle");
    burger_one.current.classList.toggle("nav--toggle");
    burger_two.current.classList.toggle("nav--toggle");
    burger_three.current.classList.toggle("nav--toggle");
    navOverlay.current.classList.toggle("nav--toggle");
  }

  function closeNavLink() {
    nav_links.current.classList.remove("nav-toggle");
    burger_one.current.classList.remove("nav--toggle");
    burger_two.current.classList.remove("nav--toggle");
    burger_three.current.classList.remove("nav--toggle");
    navOverlay.current.classList.remove("nav--toggle");
  }
  function toggleOverlay() {
    nav_links.current.classList.toggle("nav-toggle");
    burger_one.current.classList.toggle("nav--toggle");
    burger_two.current.classList.toggle("nav--toggle");
    burger_three.current.classList.toggle("nav--toggle");
    navOverlay.current.classList.toggle("nav--toggle");
  }
  window.addEventListener("resize", () => {
    if (innerWidth > 850) {
      nav_links.current.classList.remove("nav-toggle");
      burger_one.current.classList.remove("nav--toggle");
      burger_two.current.classList.remove("nav--toggle");
      burger_three.current.classList.remove("nav--toggle");
      navOverlay.current.classList.remove("nav--toggle");
    } else if (
      innerWidth >= 850 &&
      nav_links.current.classList.includes("nav-toggle")
    ) {
      navOverlay.current.classList.toggle("nav--toggle");
    }
  });
  // to top btn
  function toTop() {
    scrollTo(0, 0);
  }
  return (
    <header>
      <nav>
        <Link
          to="/"
          className="nav-logo"
          style={{ position: "relative", zIndex: "999" }}
          onClick={closeNavLink}
        >
          <img src={logoImg} alt="" className="nav-logo" />
        </Link>
        <div className="nav-links" ref={nav_links}>
          <Link to="/" className="nav-link" onClick={closeNavLink}>
            Home
          </Link>
          <Link to="/all-movies" className="nav-link" onClick={closeNavLink}>
            All Movies
          </Link>
          <Link
            to="/search-movie"
            className="nav-link create-account-nav-btn"
            onClick={closeNavLink}
          >
            Search Movie
          </Link>
        </div>
        {/* hamburger */}
        <div
          className="hamburger"
          onClick={toggleNav}
          style={{ position: "relative", zIndex: "999" }}
        >
          <div className="burger burger--one" ref={burger_one}></div>
          <div className="burger burger--two" ref={burger_two}></div>
          <div className="burger burger--three" ref={burger_three}></div>
        </div>
      </nav>
      <div
        className="nav--overlay"
        ref={navOverlay}
        onClick={toggleOverlay}
      ></div>
      <i className="ri-arrow-up-s-line back--to--top" onClick={toTop}></i>
    </header>
  );
};

export default Header;
