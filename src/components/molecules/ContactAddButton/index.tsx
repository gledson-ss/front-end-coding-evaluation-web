import React from 'react';

import { useModal } from '../../../hooks/useModal';
import AddIcon from '../../atoms/AddIcon';
import CreateContactText from '../../atoms/CreateContactText';
import * as Styled from './styles';

const ContactAddButton: React.FC = () => {
  const { setModalCreateIsOpen } = useModal((state) => state);

  return (
    <Styled.Button onClick={() => setModalCreateIsOpen(true)}>
      <Styled.ContentCreateContactText>
        <CreateContactText />
      </Styled.ContentCreateContactText>

      <Styled.ContentAddIcon>
        <AddIcon />
      </Styled.ContentAddIcon>
    </Styled.Button>
  );
};

export default ContactAddButton;
