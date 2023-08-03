import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
        {/* 제목 클릭시 Detail컴포넌트연결 */}
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
