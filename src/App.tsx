import React from "react";
import styled from "styled-components";

import { Section } from "./components";

import * as radixColors from "@radix-ui/colors";
const colours: { [key: string]: any } = radixColors;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0;

  div[role="palette"]:not(:first-child) {
    margin-top: 40px;
  }
`;

function App() {
  return (
    <Container>
      <Section colours={colours} />
      <Section colours={colours} dark />
    </Container>
  );
}

export default App;
