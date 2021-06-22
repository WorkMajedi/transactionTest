import styled from 'styled-components';
import { Pallets } from '../../../../styles/paletteColor';

const HeaderCu = styled.div`
  background-color: ${Pallets.header_Card};
  color: ${Pallets.light};
  font-size: 18px;
  font-weight: 500;
  padding: 16px;
  margin-bottom: 18px;
  width: 100%;
  height: 130px;
  border-radius: 20px;
`;
const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-content: space-between;
  height: inherit;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;
const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  & h2 {
    padding-bottom: 15px;
  }
`;
export { Subtitle, Title, BoxHeader, HeaderCu };
