import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = Modal.styled`
  border-radius: 8px;
  background-color: #FFF;
  padding: 24px 36px;
  width: 520px;
  
  @media (max-width: 720px){
    padding: 32px 28px;
    width: auto;
  }
  @media (max-width: 420px){
    overflow: scroll;
    height: 400px;
    padding: 24px 12px;
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
