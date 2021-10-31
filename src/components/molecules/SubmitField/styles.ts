import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
