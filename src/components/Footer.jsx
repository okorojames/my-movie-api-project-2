import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const myprofile = "https://okorojames.netlify.app";
  const twitterprofile = "https://www.twitter.com/okorojames_";
  return (
    <footer className="footer--section">
      <div className="footer--first--col">
        <p className="footer--paragraph">
          {" "}
          built by <Link to={myprofile}>JamexTech</Link>
        </p>
        <p className="footer--paragraph--2">
          Twitter @ <Link to={twitterprofile}>Okorojames</Link>
        </p>
      </div>
      <p className="footer--paragraph--3">
        <Link to="https://github.com/okorojames">JamexTech</Link>&copy;
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
