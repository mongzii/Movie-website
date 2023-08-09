import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Containered = styled.div`
  /* border: 10px solid black; */
`;
const TotalMained = styled.div`
  display: flex;
  flex-direction: column;
`;

const EachMained = styled.div`
  /* border: 10px solid red; */
  /* display: flex;
  flex-direction: row; */
  /* margin-top: 50px; */
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
      )
      .then(res => {
        setMovies(res.data.data.movies);
        // console.log(res.data.data.movies);
        // console.log(res.data.data.movies);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <Containered>
        {loading ? (
          <h1>Loading......</h1>
        ) : (
          <div>
            <TotalMained>
              {movies.map(movie => (
                <EachMained>
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                </EachMained>
              ))}{" "}
            </TotalMained>
          </div>
        )}
      </Containered>
      <Footer />
    </>
  );
}

export default Home;
