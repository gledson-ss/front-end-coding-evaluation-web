import styled from 'styled-components';
import { BiEdit } from 'react-icons/bi';

export const Container = styled.div`
  width: 100%;
  margin: 0 20px;
  background-color: ${(props) => props.theme.colors.smoke};
  border-radius: 8px;
  margin-bottom: 24px;
  @media (min-width: 520px) {
    width: 360px;
  }
`;

export const NameContainer = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const NameContact = styled.h2`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const ContainerItemName = styled.li`
  display: flex;
  margin-top: 24px;
  padding-left: 24px;
`;

export const ItemName = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const DataContact = styled.p`
  margin-left: 8px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const DataContainer = styled.ul``;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.colors.greyLight};
  padding: 24px;
  margin-top: 24px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ButtonsContainer = styled.div``;

export const ButtonEdit = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border: none;
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconEdit = styled(BiEdit)`
  width: 24px;
  height: 24px;
`;

export const CityName = styled.p`
  font-style: italic;
  display: flex;
  align-items: center;
  font-size: 18px;
`;
