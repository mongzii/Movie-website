import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
      )
      .then(res => {
        setMovies(res.data.data.movies);
        console.log(res.data.data.movies);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading......</h1>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
