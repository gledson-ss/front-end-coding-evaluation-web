import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 3px;
  border: 0;
  background: ${(props) => props.theme.colors.blueMedium};
  color: ${(props) => props.theme.colors.background};
  font-weight: 600;
  font-size: 14px;
  font-family: Poppins, sans-serif;
  margin-top: 48px;
  padding: 16px 36px;
  width: 120px;

  @media (min-width: 768px) {
    & + button {
      margin-left: 24px;
    }
  }

  transition: filter 0.2s;
  :hover {
    cursor: pointer;
    filter: opacity(0.8);
  }
`;
