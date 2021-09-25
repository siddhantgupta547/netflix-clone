import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

/*instance.get("/movie/550?api_key=7c8a6d030f08bb63d41a438eb4d2d607")==> https://api.themoviedb.org/3/movie/550?api_key=7c8a6d030f08bb63d41a438eb4d2d607*/

export default instance;
