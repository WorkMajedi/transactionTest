import styled from 'styled-components';
import { Pallets } from '../../styles/paletteColor';

export const CardCu = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  width: 90%;
  background-color: ${Pallets.light};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  & {
    @media only screen and (min-width: 720px) {
      width: 70%;
    }
    @media only screen and (min-width: 1200px) {
      width: 40%;
    }
  }
`;
