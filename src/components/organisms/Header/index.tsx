import React from 'react';

import InfoHeader from '../../molecules/InfoHeader';
import ContactAddButton from '../../molecules/ContactAddButton';
import * as Styled from './styles';

const Header: React.FC = () => (
  <Styled.Container>
    <Styled.Header>
      <InfoHeader />
      <Styled.ButtonContainer>
        <ContactAddButton />
      </Styled.ButtonContainer>
    </Styled.Header>
  </Styled.Container>
);

export default Header;
