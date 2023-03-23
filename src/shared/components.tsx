import styled from "styled-components";

export const Button = styled.button<{ selected?: boolean }>`
  all: unset;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 4px;
  background: ${(p) => (p.selected ? "#162d3f" : "none")};
  color: ${(p) => (p.selected ? "white" : "#162d3f")};
  text-align: left;
  padding-left: 16px;

  :hover {
    background: ${(p) => (p.selected ? "#162d3f" : "#4b7696")};
    color: white;
  }
`;

export const MenuWrapper = styled.div`
  background: lightgray;
`;
