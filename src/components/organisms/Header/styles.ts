import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.purpleBold};
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 172px;

  @media (max-width: 1366px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
