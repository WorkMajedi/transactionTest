import React, { FunctionComponent } from 'react';
import Card from '../../../../../components/Card';
import CardHeader from '../../../../../components/Card/component/CardHeader';
import CardBody from '../../../../../components/Card/component/CardBody';
import { Link } from 'react-router-dom';
import LinkRouter from '../../../../../components/Button/LinkRouter';
import { BoxList } from './ListTransaction.Style';
import { useSelector } from 'react-redux';
import RecordTransaction from './component/RecordTransaction';
interface OwnProps {}

type Props = OwnProps;

export const ListTransaction: FunctionComponent<Props> = props => {
  const wallet = useSelector((state: any) => state.wallet);
  console.log(wallet, '-- wallet  --');
  return (
    <>
      <Card>
        <CardHeader wallet={wallet.Amount} />
        <CardBody>
          <BoxList>
            <LinkRouter primary>
              <Link to={'/transaction/create'}>Create Transaction</Link>
            </LinkRouter>
          </BoxList>
          <RecordTransaction listTransaction={wallet.infoTransaction} />
          {!wallet.infoTransaction?.length && ' Record'}
        </CardBody>
      </Card>
    </>
  );
};
