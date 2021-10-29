import React, { FC, ReactNode, useEffect } from 'react';
import * as Styled from './styles';
import { useModal } from '../../../hooks/useModal';

interface ModalProps {
  children: ReactNode
}

const MenuModal: FC<ModalProps> = ({ children }) => {
  const { modalState, setIsOpen } = useModal((state) => state);
  function handleOpenModal() {
    setIsOpen(false);
  }

  return (

    <Styled.Container
      onEscapeKeydown={() => handleOpenModal()}
      onBackgroundClick={() => handleOpenModal()}
      isOpen={modalState.isOpen}
    >
      { children }
    </Styled.Container>

  );
};

export default MenuModal;
