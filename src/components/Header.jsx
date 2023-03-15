import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo-no-bg.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logoImg} alt="" className="nav-logo" />
        <div className="nav-links">
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
      </nav>
    </header>
  );
};

export default Header;
