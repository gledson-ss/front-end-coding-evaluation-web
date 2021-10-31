import React, { FC, ReactNode } from 'react';

import * as Styled from './styles';

interface componentProps {
  children: ReactNode
}

const ContactName: FC<componentProps> = (
  { children },
) => (
  <Styled.ContactName>{children}</Styled.ContactName>
);

export default ContactName;
