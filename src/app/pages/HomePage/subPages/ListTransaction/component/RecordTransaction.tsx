import moment from 'moment';
import React, { FunctionComponent } from 'react';
import {
  BoxDateCu,
  BoxDetailCu,
  DetailTransactionCu,
  ExpenseTransactionCu,
  GroupTransactionCu,
  IncomeTransactionCu,
  NameMonthTransactionCu,
  RecordTransactionCu,
  TypeTransactionCu,
} from './RecordTransaction.Style';

type TransactionType = {
  amount: number;
  Note: string;
  Date: string;
  Category: string;
};
interface OwnProps {
  listTransaction: TransactionType[];
}

type Props = OwnProps;

let lodash = require('lodash');
const RecordTransaction: FunctionComponent<Props> = ({
  listTransaction,
  ...props
}) => {
  function SortListDate(array: any) {
    let arr = [...array];
    let grouped_items = lodash.groupBy(arr, b =>
      moment(b.Date).startOf('month').format('YYYY-MM'),
    );

    lodash
      .values(grouped_items)
      .forEach(arr =>
        arr.sort((a, b) => moment(a.Date).day() - moment(b.Date).day()),
      );
    console.log(Object.entries(grouped_items), 'dfsdfasf');
    return Object.entries(grouped_items);
  }
  console.log(listTransaction, '-- 77  --');
  return (
    <>
      {listTransaction?.length &&
        SortListDate(listTransaction).length &&
        SortListDate(listTransaction).map((group: any, key) => {
          const date: any = moment(group[0]).format('MMM YYYY');
          console.log(group[0], '-- aaa  --');
          return (
            <GroupTransactionCu key={key}>
              <NameMonthTransactionCu>
                {typeof group[0] === 'string' && date}
              </NameMonthTransactionCu>
              <>
                {group[1] &&
                  group[1]?.map((item: any, index) => {
                    console.log(item, '-- testt  --');
                    const days: any = moment(item.Date).format('DD');
                    return (
                      <RecordTransactionCu key={index}>
                        <BoxDetailCu>
                          <BoxDateCu>{days}</BoxDateCu>
                          <div>
                            <TypeTransactionCu>
                              {item.Category}
                            </TypeTransactionCu>
                            <DetailTransactionCu>
                              {item.Note}
                            </DetailTransactionCu>
                          </div>
                        </BoxDetailCu>
                        {item.Category === 'Income' ? (
                          <IncomeTransactionCu>
                            +${item.amount}
                          </IncomeTransactionCu>
                        ) : (
                          <ExpenseTransactionCu>
                            -${item.amount}
                          </ExpenseTransactionCu>
                        )}
                      </RecordTransactionCu>
                    );
                  })}
              </>
            </GroupTransactionCu>
          );
        })}
    </>
  );
};

export default RecordTransaction;
