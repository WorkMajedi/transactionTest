import React, { FunctionComponent } from 'react';
import { CardCu } from './Card.style';

interface props {
  children?: React.ReactNode;
}

type CardType = props;

const Card: FunctionComponent<CardType> = ({ children }) => {
  return (
    <>
      <CardCu>{children}</CardCu>
    </>
  );
};

export default Card;
