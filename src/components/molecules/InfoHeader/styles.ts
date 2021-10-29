import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContentDescriptionHeader = styled.div`
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 26px;
  }
`;
