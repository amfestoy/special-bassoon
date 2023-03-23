import styled from "styled-components";

import { useStore } from "../solutionDesignerStore";
import { MenuWrapper, Button } from "../../shared/components";

const ButtonList = styled.ul`
  all: unset;
`;

const Header = styled.h2`
  margin-bottom: 16px;
  text-align: left;
  padding-left: 16px;
`;

const SideMenu = () => {
  const { changeFeatureIndex, featureCollections, featureIndex } = useStore();
  return (
    <MenuWrapper>
      <Header>Solutions</Header>
      <ButtonList>
        {featureCollections.map((_, i) => {
          return (
            <li>
              <Button
                onClick={() => changeFeatureIndex(i)}
                selected={i === featureIndex}
              >
                Solution {i + 1}
              </Button>
            </li>
          );
        })}
      </ButtonList>
    </MenuWrapper>
  );
};

export default SideMenu;
