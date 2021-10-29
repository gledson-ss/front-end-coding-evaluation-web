import create from 'zustand';

interface adressProps {
  cep: string;
  localidade: string;
  uf: string;
  logradouro: string;
  ibge: string;
}

interface contactProps {
  name: string;
  email: string;
  date: string;
  adress: adressProps;
}

interface contactListProps{
  contactList: () => contactProps[];
}

export const useContactList = create<contactListProps>((set) => ({
  contactList: () => {
    const storagedList = localStorage.getItem('@contact:list');

    if (storagedList) {
      return JSON.parse(storagedList);
    }
    return [];
  },
}));
