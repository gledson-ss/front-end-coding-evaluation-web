import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  outline: none;
  border: none;
  border-radius: 8px;
  transition: filter 0.5s;
  background-color: transparent;
  height: 52px;
  &:hover {
    cursor: pointer;
    filter: opacity(0.7);
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ContentCreateContactText = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  height: 100%;
  border-radius: 8px 0 0 8px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentAddIcon = styled.div`
  background-color: ${(props) => props.theme.colors.blueLight};
  display: flex;
  border-radius: 0 8px 8px 0;
  height: 100%;
  align-items: center;
  padding: 0 16px;
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;
