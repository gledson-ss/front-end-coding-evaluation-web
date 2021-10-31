import React, { FC } from 'react';

import { useModal } from '../../../hooks/useModal';
import FormButton from '../../atoms/FormButton';
import * as Styled from './styles';

interface submitFieldProp {
  context: string;
}

const SubmitField: FC<submitFieldProp> = ({ context }) => {
  const { setModalCreateIsOpen, setModalEditIsOpen } = useModal((state) => state);
  function handleCloseModal() {
    if (context === 'edit') {
      setModalEditIsOpen(false);
      return;
    }
    setModalCreateIsOpen(false);
  }

  return (
    <Styled.ButtonContainer>
      <FormButton type="submit" value={context === 'edit' ? 'Edit' : 'Create'} />
      <FormButton type="button" onClick={() => handleCloseModal()} value="Cancel" />
    </Styled.ButtonContainer>
  );
};

export default SubmitField;
