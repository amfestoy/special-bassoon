import styled from "styled-components";
import logo from "../spacemakerlogo.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 24px;
  font-weight: bold;
  background: #162d3f;
  height: 60px;
  color: white;
`;

const IMG = styled.img`
  height: 32px;
`;

const TopMenu = () => {
  return (
    <Wrapper>
      <IMG src={logo} />
    </Wrapper>
  );
};

export default TopMenu;
