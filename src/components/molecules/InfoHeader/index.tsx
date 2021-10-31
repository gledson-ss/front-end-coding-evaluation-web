import React from 'react';

import ContactPageIcon from '../../atoms/ContactPageIcon';
import MessageHeaderText from '../../atoms/MessageHeaderText';
import WelcomeHeaderText from '../../atoms/WelcomeHeaderText';
import * as Styled from './styles';

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
