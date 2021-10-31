import React, {
  FC, useEffect, useState,
} from 'react';

import { contactProps } from '../../../@types/contact';
import { useContactList } from '../../../hooks/useContactList';
import Contact from '../../molecules/Contact';
import * as Styled from './styles';

const ContactListMenu: FC = () => {
  const { contactList } = useContactList((state) => state);
  const [contacts, setContacts] = useState<contactProps[]>([]);

  useEffect(() => {
    setContacts([...contactList]);
  }, [contactList]);

  return (
    <Styled.Container>

      <Styled.Content>
        {
          contacts.map((item: contactProps) => (
            <Styled.CardContainer>
              <Contact key={item.name} listItem={item} />
            </Styled.CardContainer>
          ))
        }
      </Styled.Content>

    </Styled.Container>
  );
};

export default ContactListMenu;
