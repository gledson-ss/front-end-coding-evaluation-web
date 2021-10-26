import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  outline: none;
  border: none;
  border-radius: 8px;
  transition: filter 0.5s;
  &:hover {
    cursor: pointer;
    filter: opacity(0.8);
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ContentCreateContactText = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 16px 24px;
  border-radius: 8px 0 0 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentAddIcon = styled.div`
  background-color: ${(props) => props.theme.colors.blueLight};
  display: flex;
  padding: 16.5px 16px;
  border-radius: 0 8px 8px 0;
  margin: 0 auto;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;
