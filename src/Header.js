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
const SortStyle = styled.span`
  /* color: red; */
  margin: 30px;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <Aaa>
        <h1>JETFLEX</h1>
        {/* <Link to="/movie/comedy">comedy</Link> */}
        <nav>
          <SortStyle onClick={() => navigate("/movie/documentary")}>
            Documentary
          </SortStyle>
          <SortStyle onClick={() => navigate("/movie/action")}>
            Action
          </SortStyle>
          <SortStyle onClick={() => navigate("/movie/biography")}>
            Biography
          </SortStyle>
          <SortStyle onClick={() => navigate("/movie/drama")}>Drama</SortStyle>
          <SortStyle onClick={() => navigate("/movie/music")}>Music</SortStyle>
          <SortStyle onClick={() => navigate("/movie/mystery")}>
            Mystery
          </SortStyle>
        </nav>
      </Aaa>
    </div>
  );
}
export default Header;
