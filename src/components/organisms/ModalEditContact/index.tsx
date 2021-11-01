import React, { FC, FormEvent } from 'react';
import { toast } from 'react-toastify';

import { contactProps } from '../../../@types/contact';
import { useContactList } from '../../../hooks/useContactList';
import { useModal } from '../../../hooks/useModal';
import { api } from '../../../service/api';
import FormTitle from '../../atoms/FormTitle';
import FormInputField from '../../molecules/FormInputField';
import SubmitField from '../../molecules/SubmitField';
import * as Styled from './styles';

const ModalEditContact: FC = () => {
  const { setModalEditIsOpen, modalEditlIsOpen } = useModal();
  const { editingContact, updateContact } = useContactList();
  function handleCloseModal() {
    setModalEditIsOpen(false);
  }

  async function getResponseApi(cep: string, inputArray: HTMLInputElement[]) {
    let responseApiCep = null;

    try {
      responseApiCep = await (await api.get(`${cep}/json/`)).data;
    } catch {
      responseApiCep = 'error';
    }

    if (responseApiCep === 'error') {
      toast.error('Ops, CEP Invalid!');
    } else {
      const res: contactProps = {
        id: editingContact.id,
        name: inputArray[0].value,
        email: inputArray[1].value,
        date: inputArray[2].value,
        adress: {
          cep: inputArray[3].value,
          complemento: responseApiCep.complemento,
          logradouro: responseApiCep.logradouro,
          localidade: responseApiCep.localidade,
          ibge: responseApiCep.ibge,
          uf: responseApiCep.uf,
        },
      };

      updateContact(res);
      handleCloseModal();
      toast.success('Sucess!');
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const getEvent = event.target as any;
    const cepValue = getEvent[3].value;

    getResponseApi(cepValue, getEvent);
    event.preventDefault();
  }

  return (
    <Styled.Container
      isOpen={modalEditlIsOpen}
      onBackgroundClick={() => handleCloseModal()}
      onEscapeKeydown={() => handleCloseModal()}
    >
      <Styled.Form onSubmit={(e) => handleSubmit(e)}>
        <FormTitle value="Edit a contact." />
        <FormInputField initialData={editingContact} context="edit" />
        <SubmitField context="edit" />
      </Styled.Form>
    </Styled.Container>
  );
};

export default ModalEditContact;
