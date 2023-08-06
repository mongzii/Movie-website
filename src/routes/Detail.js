import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // console.log(id);
  const [intro, setIntro] = useState([]);

  useEffect(() => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(res => {
        setIntro(res.data.data.movie);
        // console.log(res.data.data.movie);
        console.log(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* {console.log(intro)} */}
      <img src={intro.medium_cover_image} alt={intro.title} />
      <h1>{intro.title_long}</h1>
      <p>{intro.description_full}</p>
    </div>
  );
}

export default Detail;
