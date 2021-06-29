import * as react from 'react';
import styled from 'styled-components';

const size = 64;
const Colour = styled.div<{ value: string }>`
  border-radius: 6px;
  width: ${size}px;
  height: ${size}px;
  ${(props) => `background-color: ${props.value};`}
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 12px;
  margin-top: 8px;
`;

interface Props {
  name: string;
  value: string;
}

export const Tile: react.FC<Props> = ({ name, value }) => {
  return (
    <Container>
      <Colour value={value} />
      <Label>{name}</Label>
    </Container>
  );
};
