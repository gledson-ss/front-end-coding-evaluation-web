import React from 'react';

import * as Styled from './styles';
import Contact from '../../molecules/Contact';

const ContactListMenu: React.FC = () => (
  <Styled.Container>
    <Styled.Content>
      <Contact />
      <Contact />
      <Contact />
    </Styled.Content>

  </Styled.Container>
);

export default ContactListMenu;
