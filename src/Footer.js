import { styled } from "styled-components";

const Aaa = styled.div`
  border: 1px solid black;
  background-color: skyblue;
  height: 7rem;
`;

function Footer() {
  return (
    <div>
      <Aaa>footer다</Aaa>
    </div>
  );
}

export default Footer;
