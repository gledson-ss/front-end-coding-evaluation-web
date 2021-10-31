import create from 'zustand';

import {
  contactProps,
  contactListProps,
} from '../@types/contact';

export const useContactList = create<contactListProps>((set) => ({
  contactList: [],
  addContact:
  (props: contactProps) => set((state: contactListProps) => ({
    contactList: [...state.contactList, {
      id: state.contactList.length + 1,
      name: props.name,
      email: props.email,
      date: props.date,
      adress: {
        cep: props.adress.cep,
        complemento: props.adress.complemento,
        localidade: props.adress.localidade,
        uf: props.adress.uf,
        logradouro: props.adress.logradouro,
        ibge: props.adress.ibge,
      },
    }],
  })),
  editingContact: {
    id: 0,
    name: '',
    date: '',
    email: '',
    adress: {
      cep: '',
      complemento: '',
      localidade: '',
      uf: '',
      logradouro: '',
      ibge: '',
    },
  },
  setEditingContact: (props: contactProps) => set((state) => ({
    editingContact: state.contactList.find((item) => item.id === props.id) || state.editingContact,
  })),
  updateContact: (props: contactProps) => set((state) => ({
    contactList: state.contactList.map((item) => {
      if (item.id === props.id) {
        return props;
      }
      return item;
    }),
  })),
  removeContact: (id: number) => set((state) => ({
    contactList: state.contactList.filter((item) => item.id !== id),
  })),
}));
