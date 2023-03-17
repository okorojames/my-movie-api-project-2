import { useRef } from "react";
import logoImg from "../images/logo-no-bg.png";

const Header = () => {
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
          <a href="" className="nav-link">
            All Movies
          </a>
          <a href="" className="nav-link">
            Popular
          </a>
          <a href="" className="nav-link">
            Tv Shows
          </a>
          <a href="" className="nav-link create-account-nav-btn">
            Create Account
          </a>
          <a href="" className="nav-link login-nav-btn">
            Login
          </a>
        </div>
        {/* hamburger */}
        <div className="hamburger" onClick={toggleNav}>
          <div className="burger burger--one" ref={burger_one}></div>
          <div className="burger burger--two" ref={burger_two}></div>
          <div className="burger burger--three" ref={burger_three}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
