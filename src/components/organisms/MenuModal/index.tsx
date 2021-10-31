import React, { FC, ReactNode, useEffect } from 'react';

import { useModal } from '../../../hooks/useModal';
import * as Styled from './styles';

interface ModalProps {
  children: ReactNode
}

const MenuModal: FC<ModalProps> = ({ children }) => {
  const {
    modalCreatelIsOpen,
    modalEditlIsOpen,
    setModalCreateIsOpen,
    setModalEditIsOpen,
  } = useModal((state) => state);
  function handleCloseModal() {
    setModalCreateIsOpen(false);
    setModalEditIsOpen(false);
  }

  return (
    <Styled.Container
      onEscapeKeydown={() => handleCloseModal()}
      onBackgroundClick={() => handleCloseModal()}
      isOpen={modalCreatelIsOpen || modalEditlIsOpen}
    >
      { children }
    </Styled.Container>

  );
};

export default MenuModal;
