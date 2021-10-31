import styled from 'styled-components';

export const WelcomeHeaderText = styled.h1`
  color: ${(props) => props.theme.colors.greyLight};
  @media (max-width: 250px) {
    display: none;
  }
`;
