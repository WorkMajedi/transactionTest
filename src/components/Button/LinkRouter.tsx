import React, { FC } from 'react';
import { LinkRouterCu } from './Button.Style';

interface OwnProps {
  title?: string;
  children?: React.ReactChild;
  props?: any;
  color?: string;
  primary?: any | undefined;
}

type PropsType = OwnProps;

const LinkRouter: FC<PropsType> = ({
  title,
  primary,
  color,
  children,
  ...props
}) => {
  return (
    <>
      <LinkRouterCu primary={!!primary} bg={color} {...props}>
        {title || children}
      </LinkRouterCu>
    </>
  );
};

export default LinkRouter;
