import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #333;
  font-size: 30px;
  height: 50px;
  width: ${props => props.fullWidth ? '100%' : '500px'};
`;

export default Input;
