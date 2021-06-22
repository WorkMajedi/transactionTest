import React, { FC } from 'react';
import { InputCu, TitleInput, BoxInput } from './Input.Style';

interface OwnProps {
  props?: any;
  children?: React.ReactNode;
  title?: string;
}
type PropsType = OwnProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<PropsType> = ({ placeholder, title, ...props }) => {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <InputCu {...props} />
    </BoxInput>
  );
};

export default Input;
