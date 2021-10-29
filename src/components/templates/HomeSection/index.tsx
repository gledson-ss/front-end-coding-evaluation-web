import React from 'react';

import Header from '../../organisms/Header';
import ModalAddContact from '../../organisms/ModalAddContact';
import ContactListMenu from '../../organisms/ContactListMenu';

const HomeSection: React.FC = () => (
  <>
    <Header />
    <ContactListMenu />
    <ModalAddContact />
  </>
);

export default HomeSection;
