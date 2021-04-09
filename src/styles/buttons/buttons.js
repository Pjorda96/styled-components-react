import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  font-weigth: bold;
  height: 50px;
  width: 200px;
`;

export const PrimaryButton = styled(Button)`
  background-color: #4682b4;
`;

export const SecondaryButton = styled(Button)`
  background-color: #C0625E;
`;
