import axios from "axios";
import { useEffect, useState } from "react";
// import Movie from "../components/Movie";

function Mystery() {
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
              movie.genres.includes("Mystery")
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
      {/* <p>documentary모은거다</p> */}
      {/* {console.log(newArr[0].title)} */}
      {/* <p>{console.log(result)}</p> */}
      {/* <p>{console.log(result[0])}</p> */}
      {/* {console.log(result[0])} */}
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {newArr.map(el => (
            <p key={el.id}>{el.title}</p>
          ))}
        </div>
      )}
    </>
  );
}
export default Mystery;
