import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  background: #fff;
  border-radius: 8px;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.greyLight};
  width: 100%;
  padding: 16px 24px;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.blueMedium};
    margin-top: 4px;
    border: none;
  }
`;
