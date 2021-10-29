import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  .text {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    font-weight: 600;
    border-radius: 3px;
    border: 0;
    background: ${(props) => props.theme.colors.blueMedium};
    color: ${(props) => props.theme.colors.background};
    /* margin-top: 48px; */
    padding: 16px 36px;
    & + button {
      margin-left: 24px;
    }
    transition: filter 0.2s;
    :hover {
      cursor: pointer;
      filter: opacity(0.8);
    }
  }
`;

export const InputLabelContainer = styled.div`
  margin-top: 24px;

  @media (max-width: 420px) {
    margin-top: 18px;
  }

  @media (max-height: 720px) {
    margin-top: 18px;
  }
`;

export const Label = styled.label`
  font-family: 'Poppins';
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  margin-top: 24px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
