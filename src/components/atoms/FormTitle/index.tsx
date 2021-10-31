import React from 'react';

import * as Styled from './styles';

interface formTitleProps {
  value: string;
}

const FormTitle: React.FC<formTitleProps> = ({ value }) => (
  <Styled.Container>
    <Styled.FormTitle>
      { value }
    </Styled.FormTitle>
  </Styled.Container>
);

export default FormTitle;
