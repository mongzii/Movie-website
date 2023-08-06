import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { styled } from "styled-components";

// import Movie from "../components/Movie";

const MainStyled = styled.div`
  border: 10px solid blue;
`;

function Action() {
  //   let result = [];
  const [loading, setLoading] = useState(true);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
      )
      .then(res => {
        // console.log(res.data.data.movies);
        let newMovies = res.data.data.movies;
        for (let i = 0; i < newMovies.length; i++) {
          for (let j = 0; j < newMovies[i].genres.length; j++) {
            let filtered = newMovies.filter(movie =>
              movie.genres.includes("Action")
            );
            // console.log(filtered);
            setNewArr(filtered);
            setLoading(false);

            // if (newMovies[i].genres[j] === "Documentary") {
            //   console.log(res.data.data.movies[i]);
            //   setNewArr(res.data.data.movies[i]);
            //   console.log(newArr);
            //   result.push(newMovies[i]);
            // }
          }

          //   console.log(newArr);
          //   console.log(res.data.data.movies);
        }
      });
  }, []);
  //   console.log(newArr);
  //   console.log(result[0]);

  return (
    <>
      <Header />
      {/* <p>documentary모은거다</p> */}
      {/* {console.log(newArr[0].title)} */}
      {/* <p>{console.log(result)}</p> */}
      {/* <p>{console.log(result[0])}</p> */}
      {/* {console.log(result[0])} */}

      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {/* {newArr.map(el => (
            <p key={el.id}>{el.title}</p>
          ))}
          {newArr.map(movie => (
            title={movie.title}
            summary={movie.summary}
            ))} */}

          {newArr.map(el => (
            <div key={el.id}>
              <img src={el.medium_cover_image} alt={el.title} />
              <p>{el.title}</p>
              <p>{el.summary}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
export default Action;
