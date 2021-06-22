import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { BoxHeader, Title, Subtitle, HeaderCu } from './CardHeader.Style';

interface OwnProps {
  children?: React.ReactNode | undefined;
  wallet?: number;
}

type HeaderType = OwnProps;

const CardHeader: FunctionComponent<HeaderType> = ({ wallet, ...props }) => {
  const date: any = moment().format('ll');
  console.log(date, '--   --');
  return (
    <>
      <HeaderCu>
        <BoxHeader className={'boxHeader'}>
          <Title className={'title'}>
            <div>Wallet Balance</div>
            <div>{date}</div>
          </Title>
          <Subtitle className={'subtitle'}>
            <h1> ${wallet}</h1>
            <div>USD</div>
          </Subtitle>
        </BoxHeader>
      </HeaderCu>
    </>
  );
};

export default CardHeader;
