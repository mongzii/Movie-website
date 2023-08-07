import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function Detail() {
  const { id } = useParams();
  // console.log(id);
  const [intro, setIntro] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const goback = () => {
  //   navigate(-1);
  // };

  const MainStyled = styled.div`
    /* border: 10px solid black; */
    padding: 50px;
    > button {
      width: 130px;
      height: 35px;
      background-color: black;
      color: white;
      border-radius: 3px;
      cursor: pointer;
    }
  `;
  // const ImgPartStyle = styled.div`
  //   border: 10px solid blue;
  // `;

  useEffect(() => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(res => {
        setIntro(res.data.data.movie);
        // console.log(res.data.data.movie);
        setLoading(false);
        console.log(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* {console.log(intro)} */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MainStyled>
          <img src={intro.large_cover_image} alt={intro.title} />
          <h1>{intro.title_long}</h1>
          <p>{intro.description_full}</p>
          {/* <button onClick={() => goback()}>back</button> */}
          {/* <button onClick={() => navigate("/")}>Home</button> */}
          <button onClick={() => navigate("/")}>Home</button>
        </MainStyled>
      )}
    </div>
  );
}

export default Detail;
