import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 20px;
  background-color: ${(props) => props.theme.colors.smoke};
  border-radius: 8px;

  @media (min-width: 520px) {
    width: 360px;
  }
  @media (max-width: 520px) {
    overflow: scroll;
    height: 400px;
    width: 360px;
  }
  @media (max-width: 360px) {
    width: 280px;
  }
  @media (max-width: 280px) {
    width: 220px;
    overflow-x: scroll;
  }
`;

export const NameContainer = styled.div`
  padding-top: 24px;
  margin-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  height: 68px;
  @media (max-width: 380px) {
    height: 78px;
    overflow-x: scroll;
  }
`;

export const ContainerItemName = styled.li`
  display: flex;
  margin-top: 24px;
  padding-left: 24px;
`;
