import React, { FC } from 'react';
import { TitleInput, BoxInput, TextAreaCu } from './Input.Style';

interface OwnProps {
  props?: any;
  children?: React.ReactNode;
  title?: string;
}
type PropsType = OwnProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<PropsType> = ({ placeholder, title, ...props }) => {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <TextAreaCu {...props} />
    </BoxInput>
  );
};

export default TextArea;
