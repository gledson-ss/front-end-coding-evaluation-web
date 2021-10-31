import React from 'react';

import { contactProps } from '../../../@types/contact';
import Input from '../../atoms/Input';
import InputLabel from '../../atoms/InputLabel';
import * as Styled from './styles';

interface formInputFieldProps {
  initialData: contactProps;
  context: string;
}

const FormInputField: React.FC<formInputFieldProps> = ({ initialData, context }) => (
  <Styled.Container>
    <Styled.InputLabelContainer>
      <InputLabel htmlFor="fname" value="Name:" />
      <Input
        type="text"
        field="name"
        placeholderValue="type your name."
        value={context === 'edit' ? initialData.name : ''}
      />
    </Styled.InputLabelContainer>

    <Styled.InputLabelContainer>
      <InputLabel htmlFor="femail" value="Email:" />
      <Input
        type="email"
        field="email"
        placeholderValue="ex: oi@gledson.dev"
        value={context === 'edit' ? initialData.email : ''}
      />
    </Styled.InputLabelContainer>

    <Styled.InputLabelContainer>
      <InputLabel htmlFor="fdate" value="Date:" />
      <Input
        type="date"
        field="date"
        placeholderValue="ex: 06/07/1999"
        value={context === 'edit' ? initialData.date : ''}
      />
    </Styled.InputLabelContainer>

    <Styled.InputLabelContainer>
      <InputLabel htmlFor="fcep" value="Cep:" />
      <Input
        type="text"
        field="cep"
        placeholderValue="00000-000"
        value={context === 'edit' ? initialData.adress.cep : ''}
      />
    </Styled.InputLabelContainer>
  </Styled.Container>
);

export default FormInputField;
