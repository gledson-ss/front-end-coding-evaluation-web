import React from 'react';

import { contactProps } from '../../../@types/contact';
import ContactName from '../../atoms/ContactName';
import ContactDataContainer from '../ContactDataContainer';
import ContactFooter from '../ContactFooter';
import * as Styled from './styles';

interface componentProps {
  listItem: contactProps;
}

const Contact: React.FC<componentProps> = ({ listItem }) => (
  <Styled.Container>
    <Styled.NameContainer>
      <ContactName>{listItem.name}</ContactName>
    </Styled.NameContainer>
    <ContactDataContainer listItem={listItem} />
    <ContactFooter list={listItem} />

  </Styled.Container>
);

export default Contact;
