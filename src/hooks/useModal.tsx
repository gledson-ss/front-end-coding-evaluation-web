import create from 'zustand';

interface useModalProps {
  modalCreatelIsOpen: boolean,
  modalEditlIsOpen: boolean,
  setModalEditIsOpen: (props: boolean) => void;
  setModalCreateIsOpen: (props: boolean) => void;

}

const useModal = create<useModalProps>((set) => ({
  modalCreatelIsOpen: false,
  modalEditlIsOpen: false,
  setModalCreateIsOpen: (props) => set(({
    modalCreatelIsOpen: props,
  })),
  setModalEditIsOpen: (props) => set(({
    modalEditlIsOpen: props,
  })),
}));

export { useModal };
