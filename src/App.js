import React from "react";
import Search from "./Search/Search";
import {
  container as Container,
  input as Input,
  PrimaryButton,
  SecondaryButton,
} from './styles';

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
