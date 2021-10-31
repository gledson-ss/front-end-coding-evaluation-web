import React, { ReactNode } from 'react';

import * as Styled from './styles';

interface componentProps {
  value: ReactNode;
  htmlFor: string;
}

const InputLabel: React.FC<componentProps> = (
  { value, htmlFor },
) => <Styled.Label htmlFor={htmlFor}>{value}</Styled.Label>;

export default InputLabel;
