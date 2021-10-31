export interface adressProps {
  cep: string;
  complemento: string;
  localidade: string;
  uf: string;
  logradouro: string;
  ibge: string;
}

export interface contactProps {
  readonly id: number;
  name: string;
  email: string;
  date: string;
  adress: adressProps;
}

export interface contactListProps {
  contactList: contactProps[];
  addContact: (props: contactProps) => void;
  editingContact: contactProps;
  setEditingContact: (props: contactProps) => void;
  updateContact: (props: contactProps) => void;
  removeContact: (id: number) => void;
}
