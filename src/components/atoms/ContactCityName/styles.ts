import styled from 'styled-components';

export const CityName = styled.p`
  font-style: italic;
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 50%;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;
