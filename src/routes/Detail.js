import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(res => console.log(res.data.data.movie));
  }, []);

  return <h1>detail다</h1>;
}

export default Detail;
