import styled from 'styled-components';

export const ButtonIcon = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border: none;
  &:focus {
    outline: none;
  }
  width: 45px;
  height: 45px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  transition: filter 0.3s;
  :hover {
    filter: brightness(0.7);
  }
`;
