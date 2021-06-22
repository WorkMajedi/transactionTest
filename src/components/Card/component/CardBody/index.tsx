import React, { FunctionComponent } from 'react';
import { BodyCardCu } from './CardBody.Style';

interface OwnProps {
  children?: React.ReactNode;
  props?: any;
}

type Props = OwnProps;

const CardBody: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <>
      <BodyCardCu>{children}</BodyCardCu>
    </>
  );
};

export default CardBody;
