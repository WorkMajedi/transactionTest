import React, { FC } from 'react';
import { CardFooterCu } from './CardFooter.Style';

interface OwnProps {
  children?: React.ReactNode;
  props?: any;
}

type Props = OwnProps;

const index: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <CardFooterCu>{children}</CardFooterCu>
    </>
  );
};

export default index;
