import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import defaultImg from "../images/defaultImg.jpg";

const MoreInfoPage = () => {
  let { state } = useLocation();
  const [movie, setMovie] = useState();
  useEffect(() => {
    setMovie(state.movie);
  }, []);
  return (
    <section
      className="more--info--section"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      {movie && (
        <div
          style={{
            width: "60%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "80px",
          }}
        >
          <div>
            {movie.poster_path === null ? (
              <img src={defaultImg} alt="" style={{ width: "200px" }} />
            ) : (
              <img
                src={`https://themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt=""
                style={{ width: "200px" }}
              />
            )}
          </div>
          <div className="movie-title">
            Title:{" "}
            <span className="movie-name">{movie.title || movie.name}</span>
          </div>
          <div>
            Released On:{" "}
            <span className="movie--date">
              {movie.release_date || movie.first_air_date}
            </span>
          </div>
          <div>
            Plot:{" "}
            {movie.overview === "" ? (
              <span className="movie--overview" style={{ opacity: ".5" }}>
                No movie description available here
              </span>
            ) : (
              <span className="movie--overview" style={{ opacity: ".5" }}>
                {movie.overview}
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MoreInfoPage;
