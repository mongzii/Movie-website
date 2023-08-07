import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TotalMained = styled.div`
  border: 10px solid red;
  width: 88%;
  margin: 20px;
  display: flex;
  flex-direction: row;
`;
const PartMained = styled.div`
  border: 5px solid blue;
  margin: 10px;
  padding: 7px;
  display: flex;
  flex-direction: column;
`;

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <TotalMained>
        <img src={coverImg} alt={title} />
        <PartMained>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
            {/* 제목 클릭시 Detail컴포넌트연결 */}
          </h2>

          <p>
            {summary.length > 250 ? `${summary.slice(0, 250)}......` : summary}
          </p>
          <ul>
            {genres.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PartMained>
      </TotalMained>
    </div>
  );
}

export default Movie;
