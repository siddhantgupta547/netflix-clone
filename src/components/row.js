import React, { useState, useEffect, useLayoutEffect } from "react";
import instance from "../axios";

function ROW({ title, url, isLarge }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(url);
      console.table(response.data.results);
      setMovies(response.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ROW;
