import React, { ReactNode } from 'react';

import * as Styled from './styles';

interface componentProps {
  children: ReactNode
}

const ContactCityName: React.FC<componentProps> = (
  { children },
) => <Styled.CityName>{children}</Styled.CityName>;

export default ContactCityName;
