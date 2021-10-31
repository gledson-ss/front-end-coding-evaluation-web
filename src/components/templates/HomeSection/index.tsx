import React from 'react';

import ContactListMenu from '../../organisms/ContactListMenu';
import Header from '../../organisms/Header';
import ModalAddContact from '../../organisms/ModalAddContact';
import ModalEditContact from '../../organisms/ModalEditContact';
import * as Styled from './styles';

const HomeSection: React.FC = () => (
  <Styled.Container>
    <Header />
    <ContactListMenu />
    <ModalAddContact />
    <ModalEditContact />
  </Styled.Container>
);

export default HomeSection;
