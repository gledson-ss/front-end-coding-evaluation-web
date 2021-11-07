import React from 'react';

import { contactProps } from '../../../@types/contact';
import { useContactList } from '../../../hooks/useContactList';
import { useModal } from '../../../hooks/useModal';
import ContactCityName from '../../atoms/ContactCityName';
import ContactEditButton from '../../atoms/ContactEditButton';
import EditIcon from '../../atoms/EditIcon';
import TrashIcon from '../../atoms/TrashIcon';
import * as Styled from './styles';

interface footerProps {
  list: contactProps;
}

const ContactFooter: React.FC<footerProps> = ({ list }) => {
  const { setEditingContact, removeContact } = useContactList();
  const { setModalEditIsOpen } = useModal();

  function handleEditingContact() {
    setEditingContact(list);
    setModalEditIsOpen(true);
  }

  function handleRemoveContact() {
    removeContact(list.id);
  }

  return (
    <Styled.Footer>
      <Styled.ButtonsContainer>
        <ContactEditButton type="button" onClick={() => handleEditingContact()}>
          <EditIcon />
        </ContactEditButton>
        <ContactEditButton type="button" onClick={() => handleRemoveContact()}>
          <TrashIcon />
        </ContactEditButton>
      </Styled.ButtonsContainer>
      <ContactCityName>
        city:
        {' '}
        {list.adress.localidade}
      </ContactCityName>
    </Styled.Footer>
  );
};

export default ContactFooter;
