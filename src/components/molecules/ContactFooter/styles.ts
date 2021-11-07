import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.colors.greyLight};
  padding: 24px;
  margin-top: 24px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ButtonsContainer = styled.div`
  width: 110px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
`;

export const ContactButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 8px;
  border-radius: 8px;
`;
