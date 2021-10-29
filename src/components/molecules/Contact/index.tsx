import React from 'react';

import * as Styled from './styles';

const Contact: React.FC = () => (
  <Styled.Container>
    <Styled.NameContainer>
      <Styled.NameContact>Gledson Santos de souza</Styled.NameContact>
    </Styled.NameContainer>
    <Styled.DataContainer>
      <Styled.ContainerItemName>
        <Styled.ItemName>email:</Styled.ItemName>
        <Styled.DataContact>algo@gledson.dev</Styled.DataContact>
      </Styled.ContainerItemName>
      <Styled.ContainerItemName>
        <Styled.ItemName>date:</Styled.ItemName>
        <Styled.DataContact>04/03/2000</Styled.DataContact>
      </Styled.ContainerItemName>
      <Styled.ContainerItemName>
        <Styled.ItemName>cep:</Styled.ItemName>
        <Styled.DataContact>58145000</Styled.DataContact>
      </Styled.ContainerItemName>
      <Styled.ContainerItemName>
        <Styled.ItemName>street:</Styled.ItemName>
        <Styled.DataContact>Rua tal</Styled.DataContact>
      </Styled.ContainerItemName>
      <Styled.ContainerItemName>
        <Styled.ItemName>state:</Styled.ItemName>
        <Styled.DataContact>PB</Styled.DataContact>
      </Styled.ContainerItemName>
      <Styled.ContainerItemName>
        <Styled.ItemName>number:</Styled.ItemName>
        <Styled.DataContact>IBGE</Styled.DataContact>
      </Styled.ContainerItemName>
      <Styled.ContainerItemName>
        <Styled.ItemName>complement:</Styled.ItemName>
        <Styled.DataContact>complemento aqui</Styled.DataContact>
      </Styled.ContainerItemName>
    </Styled.DataContainer>
    <Styled.Footer>
      <Styled.ButtonsContainer className="buttons">
        <Styled.ButtonEdit type="button">
          <Styled.IconEdit />
        </Styled.ButtonEdit>
      </Styled.ButtonsContainer>
      <Styled.CityName>city: Montadas</Styled.CityName>
    </Styled.Footer>
  </Styled.Container>
);

export default Contact;
