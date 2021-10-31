import React, { ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

interface formButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  value: string;
}

const FormButton: React.FC<formButtonProps> = ({ value, onClick, type }) => (
  <Styled.Container onClick={onClick} type={type}>
    {value}
  </Styled.Container>
);

export default FormButton;
