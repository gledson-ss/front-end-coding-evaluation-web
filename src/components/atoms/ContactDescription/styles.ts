import styled from 'styled-components';

export const ItemName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  & + p {
    margin-left: 8px;
  }
`;
