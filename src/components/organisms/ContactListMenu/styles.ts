import styled from 'styled-components';

export const Container = styled.menu`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -100px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1366px;

  @media (max-width: 799px) {
    justify-content: center;
  }
`;
