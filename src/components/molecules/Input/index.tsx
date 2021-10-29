import React, { FC } from 'react';

import * as Styled from './styles';

interface inputProps {
  type: string
}

const Input: FC<inputProps> = ({ type }) => (
  <Styled.Input type={type} />
);

export default Input;
