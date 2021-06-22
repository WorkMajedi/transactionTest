import styled from 'styled-components/macro';
import { Pallets } from '../../../../../../styles/paletteColor';

const GroupTransactionCu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  padding: 10px;
  margin: 10px 0;
`;
const RecordTransactionCu = styled.div`
  box-shadow: 0 0px 2px rgb(0 0 0 / 25%), 0 0px 12px rgb(0 0 0 / 22%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;
const BoxDetailCu = styled.div`
  display: flex;
  align-items: center;
`;
const BoxDateCu = styled.div`
  font-size: 30px;
  font-weight: 600;
  border-right: 2px solid #eee;
  padding-right: 0.5em;
  margin-right: 10px;
`;
const TypeTransactionCu = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const DetailTransactionCu = styled.div`
  font-size: 14px;
  color: ${Pallets.border};
`;
const ExpenseTransactionCu = styled.div`
  font-size: 16px;
  color: red;
`;
const IncomeTransactionCu = styled.div`
  font-size: 16px;
  color: green;
`;
const NameMonthTransactionCu = styled.span`
  font-size: 14px;
  color: #4277a5;
  font-weight: 600;
`;

export {
  RecordTransactionCu,
  BoxDetailCu,
  BoxDateCu,
  TypeTransactionCu,
  DetailTransactionCu,
  ExpenseTransactionCu,
  IncomeTransactionCu,
  GroupTransactionCu,
  NameMonthTransactionCu,
};
