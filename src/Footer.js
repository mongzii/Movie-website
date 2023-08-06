import { styled } from "styled-components";

const Aaa = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: black;
  color: white;
  width: 99%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > h4 {
    padding-right: 15px;
  }
  > h3 {
    padding-right: 15px;
  }
`;

function Footer() {
  return (
    <div>
      <Aaa>
        <h4>Copy right 2023.</h4>
        <h3>by mongzii</h3>
      </Aaa>
    </div>
  );
}

export default Footer;
