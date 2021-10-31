import React, { FC, useState } from 'react';

import { CepMask, handleFieldSize, NameField } from '../../../utils/InputValidation';
import * as Styled from './styles';

interface inputProps {
  type: string;
  field: string;
  placeholderValue: string;
  value: string;
}

const Input: FC<inputProps> = ({
  type, field, placeholderValue, value,
}) => {
  const [inputValue, setInputValue] = useState(value);

  function handleNameField(str: string) {
    setInputValue(NameField(str));
  }

  function handleCepField(str: string) {
    setInputValue(CepMask(str));
  }

  function handleOnChange(e: string) {
    if (field === 'name') {
      handleNameField(e);
      return;
    }
    if (field === 'cep') {
      handleCepField(e);
      return;
    }
    setInputValue(e);
  }

  return (
    <Styled.Input
      type={type}
      required
      onChange={(e) => handleOnChange(e.target.value)}
      value={inputValue}
      maxLength={handleFieldSize(field)}
      placeholder={placeholderValue}
    />
  );
};

export default Input;
