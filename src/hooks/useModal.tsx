import create from 'zustand';

interface useModalProps {
  modalState: {
    isOpen: boolean;
  };
  setIsOpen: (props: boolean) => void;
}

const useModal = create<useModalProps>((set) => ({
  modalState: {
    isOpen: false,
  },
  setIsOpen: (props) => set((state) => ({
    modalState: {
      isOpen: props,
    },
  })),
}));

export { useModal };
