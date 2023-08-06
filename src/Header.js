import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Aaa = styled.div`
  border: 1px solid black;
  background-color: skyblue;
  width: 100%;
  height: 7rem;
  /* position: fixed; */
`;

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <Aaa>
        <h1>JETFLEX</h1>
        {/* <Link to="/movie/comedy">comedy</Link> */}
        <nav>
          <span onClick={() => navigate("/movie/documentary")}>
            documentary
          </span>
        </nav>
      </Aaa>
    </div>
  );
}
export default Header;
