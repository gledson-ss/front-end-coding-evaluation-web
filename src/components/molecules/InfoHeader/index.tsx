import React from 'react';

import * as Styled from './styles';
import WelcomeHeaderText from '../../atoms/WelcomeHeaderText';
import MessageHeaderText from '../../atoms/MessageHeaderText';
import ContactPageIcon from '../../atoms/ContactPageIcon';

const InfoHeader: React.FC = () => (
  <Styled.Container>
    <ContactPageIcon />
    <Styled.ContentDescriptionHeader>
      <WelcomeHeaderText />
      <MessageHeaderText />
    </Styled.ContentDescriptionHeader>
  </Styled.Container>
);

export default InfoHeader;
