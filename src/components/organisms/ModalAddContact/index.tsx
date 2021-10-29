import React, {
  FC, FormEvent, useEffect, useCallback, useState,
} from 'react';
import { api } from '../../../service/api';
import Input from '../../molecules/Input';
import MenuModal from '../MenuModal';
import * as Styled from './styles';
import { useModal } from '../../../hooks/useModal';
import { useContactList } from '../../../hooks/useContactList';

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

const ModalAddContact: FC = () => {
  const { setIsOpen } = useModal((state) => state);
  const { contactList } = useContactList((state) => state);

  async function getResponseApi(cep: string) {
    let responseApiCep = null;

    try {
      responseApiCep = await (await api.get(`${cep}/json/`)).data;
    } catch (error) {
      responseApiCep = 'error';
    }
    return responseApiCep;
  }

  const addContactInList = (item: contactProps) => {
    const array = [...contactList()];
    array.push(item);
    console.log(item);
    localStorage.setItem('@contact:list', JSON.stringify(array));
  };

  function handleSubmit(event: any) {
    const cepValue = event.target[3].value;

    getResponseApi(cepValue).then((item: adressProps) => {
      const res: contactProps = {
        name: event.target[0].value,
        email: event.target[1].value,
        date: event.target[2].value,
        adress: {
          cep: event.target[3].value,
          logradouro: item.logradouro,
          localidade: item.localidade,
          ibge: item.ibge,
          uf: item.uf,
        },
      };
      addContactInList(res);
    });
    event.preventDefault();
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <MenuModal>
      <Styled.Form className="modal" onSubmit={(e) => handleSubmit(e)}>
        <div
          className="headerMessage"
          style={{ display: 'flex' }}
        >
          <h1>
            Hello
          </h1>
          <h1>
            , Gledson
          </h1>
        </div>
        <Styled.InputLabelContainer>
          <Styled.Label htmlFor="fname">
            Name:
          </Styled.Label>
          <Input type="text" />
        </Styled.InputLabelContainer>
        <Styled.InputLabelContainer>
          <Styled.Label htmlFor="femail">
            Email:
          </Styled.Label>
          <Input type="email" />
        </Styled.InputLabelContainer>

        <Styled.InputLabelContainer>
          <Styled.Label htmlFor="fdate">
            Date:
          </Styled.Label>
          <Input type="date" />
        </Styled.InputLabelContainer>

        <Styled.InputLabelContainer>
          <Styled.Label htmlFor="fcep">
            Cep:
          </Styled.Label>
          <Input type="text" />
        </Styled.InputLabelContainer>

        <Styled.ButtonContainer>
          <button type="submit">
            <p className="text">Create</p>
          </button>
          <button type="button" onClick={() => handleCloseModal()}>
            <p className="text">Cancel</p>
          </button>
        </Styled.ButtonContainer>

      </Styled.Form>
    </MenuModal>
  );
};

export default ModalAddContact;
