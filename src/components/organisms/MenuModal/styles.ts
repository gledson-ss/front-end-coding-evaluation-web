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
