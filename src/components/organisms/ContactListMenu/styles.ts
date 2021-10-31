import styled from 'styled-components';

export const Container = styled.menu`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -100px;
  padding-bottom: 36px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1280px;
  grid-gap: 36px;
  width: 100%;

  @media (max-width: 1220px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 832px) {
    justify-content: center;
  }
`;
export const CardContainer = styled.div``;
