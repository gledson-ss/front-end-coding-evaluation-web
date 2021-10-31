import styled from 'styled-components';

export const Container = styled.div``;

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
  font-family: Poppins, sans-serif;
`;
