import styled from "styled-components";
import SideMenu from "../containers/SideMenu";
import Statistics from "../containers/Statistics";
import WorkSurface from "../containers/WorkSurface";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 260px;
  height: 100vh;
`;

const SolutionDesigner = () => {
  return (
    <Wrapper>
      <SideMenu />
      <WorkSurface />
      <Statistics />
    </Wrapper>
  );
};

export default SolutionDesigner;
