import React, { ReactNode } from 'react';

import * as Styled from './styles';

interface componentProps {
  children: ReactNode
}

const ContactDescription: React.FC<componentProps> = ({
  children,
}) => (<Styled.ItemName>{children}</Styled.ItemName>);

export default ContactDescription;
