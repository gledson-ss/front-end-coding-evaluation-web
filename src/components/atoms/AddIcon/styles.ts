import styled from 'styled-components';
import { FiPlusSquare } from 'react-icons/fi';

export const AddIcon = styled(FiPlusSquare)`
  color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  width: 24px;
  height: 24px;
`;
