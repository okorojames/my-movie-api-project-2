import React from "react";
import vidIntro from "../video/vid-intro.mp4";

const AllMovies = () => {
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
    </div>
  );
};

export default AllMovies;
