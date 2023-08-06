import { styled } from "styled-components";

const Aaa = styled.div`
  border: 1px solid black;
  background-color: skyblue;
  height: 7rem;
`;

function Footer() {
  return (
    <div>
      <Aaa>By mongzii</Aaa>
    </div>
  );
}

export default Footer;
