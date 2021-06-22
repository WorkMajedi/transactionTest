import React, { FC } from 'react';
import { SelectCu, TitleInput, BoxInput } from './Input.Style';

interface OwnProps {
  props?: any;
  children?: React.ReactNode;
  title?: string;
}
type PropsType = OwnProps & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: FC<PropsType> = ({ children, title, ...props }) => {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <SelectCu {...props}>{children}</SelectCu>
    </BoxInput>
  );
};

export default Select;
