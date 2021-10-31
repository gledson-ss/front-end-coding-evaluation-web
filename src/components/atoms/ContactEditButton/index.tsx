import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

interface componentProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}
const ContactEditButton: React.FC<componentProps> = (
  { children, onClick, type },
) => <Styled.ButtonIcon onClick={onClick} type={type}>{children}</Styled.ButtonIcon>;

export default ContactEditButton;
