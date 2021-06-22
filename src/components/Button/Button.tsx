import React, { FC } from 'react';
import { ButtonCu } from './Button.Style';

interface OwnProps {
  title?: string;
  children?: React.ReactChild;
  props?: any;
  color?: string;
  primary?: any | undefined;
}

type PropsType = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsType> = ({
  title,
  primary,
  color,
  children,
  ...props
}) => {
  return (
    <>
      <ButtonCu primary={!!primary} bg={color} {...props}>
        {title || children}
      </ButtonCu>
    </>
  );
};

export default Button;
