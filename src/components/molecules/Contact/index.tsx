import React from 'react';

import { contactProps } from '../../../@types/contact';
import { useContactList } from '../../../hooks/useContactList';
import { useModal } from '../../../hooks/useModal';
import ContactCityName from '../../atoms/ContactCityName';
import ContactDescription from '../../atoms/ContactDescription';
import ContactEditButton from '../../atoms/ContactEditButton';
import ContactName from '../../atoms/ContactName';
import EditIcon from '../../atoms/EditIcon';
import TrashIcon from '../../atoms/TrashIcon';
import * as Styled from './styles';

interface componentProps {
  listItem: contactProps;
}

const Contact: React.FC<componentProps> = ({ listItem }) => {
  const { setModalEditIsOpen } = useModal();
  const { setEditingContact, removeContact } = useContactList();

  function handleEditingContact(contact: contactProps) {
    setEditingContact(contact);
    setModalEditIsOpen(true);
  }

  function handleRemoveContact(contact: contactProps) {
    removeContact(contact.id);
  }

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <ContactName>{listItem.name}</ContactName>
      </Styled.NameContainer>
      <Styled.DataContainer>
        <Styled.ContainerItemName>
          <ContactDescription>email:</ContactDescription>
          <ContactDescription>{listItem.email}</ContactDescription>
        </Styled.ContainerItemName>
        <Styled.ContainerItemName>
          <ContactDescription>date:</ContactDescription>
          <ContactDescription>{listItem.date}</ContactDescription>
        </Styled.ContainerItemName>
        <Styled.ContainerItemName>
          <ContactDescription>cep:</ContactDescription>
          <ContactDescription>{listItem.adress.cep}</ContactDescription>
        </Styled.ContainerItemName>
        <Styled.ContainerItemName>
          <ContactDescription>street:</ContactDescription>
          <ContactDescription>
            {listItem.adress.logradouro || 'api not found...'}
          </ContactDescription>
        </Styled.ContainerItemName>
        <Styled.ContainerItemName>
          <ContactDescription>state:</ContactDescription>
          <ContactDescription>{listItem.adress.uf}</ContactDescription>
        </Styled.ContainerItemName>
        <Styled.ContainerItemName>
          <ContactDescription>number:</ContactDescription>
          <ContactDescription>{listItem.adress.ibge || 'api not found...'}</ContactDescription>
        </Styled.ContainerItemName>
        <Styled.ContainerItemName>
          <ContactDescription>complement:</ContactDescription>
          <ContactDescription>
            {listItem.adress.complemento || 'api not found...'}
          </ContactDescription>
        </Styled.ContainerItemName>
      </Styled.DataContainer>
      <Styled.Footer>
        <Styled.ButtonsContainer>
          <ContactEditButton type="button" onClick={() => handleEditingContact(listItem)}>
            <EditIcon />
          </ContactEditButton>
          <ContactEditButton type="button" onClick={() => handleRemoveContact(listItem)}>
            <TrashIcon />
          </ContactEditButton>
        </Styled.ButtonsContainer>
        <ContactCityName>
          city:
          {' '}
          {listItem.adress.localidade}
        </ContactCityName>
      </Styled.Footer>

    </Styled.Container>
  );
};

export default Contact;
