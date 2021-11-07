import React from 'react';

import { contactProps } from '../../../@types/contact';
import ContactDescription from '../../atoms/ContactDescription';
import * as Styled from './styles';

interface dataProps {
  listItem: contactProps;
}

const ContactDataContainer: React.FC<dataProps> = ({ listItem }) => (
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
      <ContactDescription>{listItem.adress.logradouro || 'api not found...'}</ContactDescription>
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
      <ContactDescription>{listItem.adress.complemento || 'api not found...'}</ContactDescription>
    </Styled.ContainerItemName>
  </Styled.DataContainer>
);

export default ContactDataContainer;
