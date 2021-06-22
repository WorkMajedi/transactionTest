import React, { FunctionComponent } from 'react';
import { BodyCuStyle } from './BodyCu.style';

interface bodyCu {
  children: React.ReactNode;
}

type Props = bodyCu;

const BodyCustom: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <BodyCuStyle>{children}</BodyCuStyle>
    </>
  );
};

export default BodyCustom;
