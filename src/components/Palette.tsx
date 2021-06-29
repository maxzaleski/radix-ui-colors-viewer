import * as react from "react";
import styled from "styled-components";

import { Tile } from "./Tile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const TilesContainer = styled.div`
  display: flex;
  flex-directory: row;
  align-items: center;
  justify-content: start;

  article:not(:first-child) {
    margin-left: 8px;
  }
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

interface Props {
  name: string;
  colours: { [key: string]: any };
}

export const Palette: react.FC<Props> = ({ name, colours }) => {
  const tiles = Object.keys(colours).map((k) => <Tile key={k} name={k} value={colours[k]} />);

  return (
    <Container role="palette">
      <Label>{name}</Label>
      <TilesContainer>{tiles}</TilesContainer>
    </Container>
  );
};
