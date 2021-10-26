import React from 'react';
import AddIcon from '../../atoms/AddIcon';
import CreateContactText from '../../atoms/CreateContactText';
import * as Styled from './styles';

const ContactAddButton: React.FC = () => (
  <Styled.Button>
    <Styled.ContentCreateContactText>
      <CreateContactText />
    </Styled.ContentCreateContactText>

    <Styled.ContentAddIcon>
      <AddIcon />
    </Styled.ContentAddIcon>
  </Styled.Button>
);

export default ContactAddButton;
