import React from 'react';
import AddIcon from '../../atoms/AddIcon';
import CreateContactText from '../../atoms/CreateContactText';
import * as Styled from './styles';
import { useModal } from '../../../hooks/useModal';

const ContactAddButton: React.FC = () => {
  const { setIsOpen } = useModal((state) => state);

  return (
    <Styled.Button onClick={() => setIsOpen(true)}>
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
