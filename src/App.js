import React from "react";
import Input from './Input';
import Search from "./Search/Search";
import { PrimaryButton, SecondaryButton } from "./Buttons/Buttons";
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

function App() {
  return (
    <Container>
      <Input placeholder="Your text goes here" fullWidth />
      <Search search={'Nothing'} />
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
    </Container>
  );
}

export default App;
