import React, { useState, useEffect } from "react";
import instance from "../axios";
import { requests } from "../requests";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(requests.fetchTrending);
      const bannerMovie = response.data.results;
      setMovie(bannerMovie[Math.floor(Math.random() * bannerMovie.length - 1)]);
    }
    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={
        movie && {
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),url(" +
            base_url +
            movie.backdrop_path +
            ")",
          height: "90vh",
          backgroundPosition: "center center",
          objectFit: "fit",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          minHeight: 400,
        }
      }
    >
      {movie && (
        <div
          className="banner_content"
          style={{
            width: "30vw",
            textAlign: "left",
            margin: 10,
            color: "azure",
          }}
        >
          <h1
            style={{
              margin: "auto",
              fontSize: "3rem",
              fontWeight: 800,
              paddingBottom: "0.3rem",
            }}
          >
            {movie.title || movie?.original_name || movie?.name}
          </h1>
          <button className="banner_button" style={styles.button}>
            Play
          </button>
          <button className="banner_button" style={styles.button}>
            More info
          </button>
          <p
            style={{
              lineHeight: 1.3,
              paddingTop: "1rem",
              fontWeight: "400",
              maxWidth: 360,
              textAlign: "left",
              wordWrap: "break-word",
            }}
          >
            {movie.overview}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  button: {
    border: "none",
    outline: "none",
    borderRadius: ".2vw",
    marginRight: "1rem",
    padding: ".5rem 2rem",
    fontWeight: 700,
    curson: "pointer",
  },
};

export default Banner;
