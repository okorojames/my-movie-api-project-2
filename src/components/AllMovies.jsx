import React from "react";
import vidIntro from "../video/vid-intro.mp4";

const AllMovies = () => {
  return (
    <div
      className="all--movies--section"
      style={{ marginTop: "80px", padding: "0 60px" }}
    >
      <div className="all--movies--first--content">
        <video
          src={vidIntro}
          autoPlay
          muted
          loop
          className="all--movie--video"
          controlsList="nodownload"
          style={{ pointerEvents: "none" }}
        ></video>
      </div>
    </div>
  );
};

export default AllMovies;
