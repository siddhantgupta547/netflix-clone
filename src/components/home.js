import React from "react";
import Row from "./row";
import Banner from "./banner";
import { requests } from "../requests";

function Home(props) {
  return (
    <div>
      <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.fetchTrending} isLarge />
      <Row title="TRENDING MOVIES" url={requests.fetchTrending} />
      <Row title="TOP RATED" url={requests.fetchTopRated} />
      <Row title="COMEDY MOVIES" url={requests.fetchComedyMovies} />
      <Row title="ACTION MOVIES" url={requests.fetchActionMovies} />
      <Row title="ROMANTIC MOVIES" url={requests.fetchRomanceMovies} />
      <Row title="HORROR MOVIES" url={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTARIES" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
