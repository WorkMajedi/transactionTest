import styled from 'styled-components';
import { Pallets } from '../../styles/paletteColor';
const InputCu = styled.input.attrs(props => ({
  // we can define static props

  // or we can define dynamic ones
  size: props.size || '1em',
}))<any>`
  color: ${Pallets.black};
  width: 75%;
  font-size: 1em;
  border: 0;
  box-shadow: 0 0 3px rgb(0 0 0 / 25%), 0 0 0 rgb(0 0 0 / 22%);
  border-radius: 4px;
  /* here we use the dynamically computed prop */
  margin: 0.5em ${props => props.size};
  padding: ${props => props.size};
  &:active {
    border: none;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%), 0 2px 3px rgb(0 0 0 / 22%);
  }
  &:focus {
    border: none;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%), 0 2px 3px rgb(0 0 0 / 22%);
    outline: none;
  }
`;
const TitleInput = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  /* width: 80%; */
  width: 75%;
`;
const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  /* flex: 1; */
  /* align-items: center; */
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;
const TextAreaCu = styled.textarea`
  color: ${Pallets.black};
  width: 75%;
  font-size: 18px;
  font-weight: 500;
  border: 0;
  box-shadow: 0 0 3px rgb(0 0 0 / 25%), 0 0 0 rgb(0 0 0 / 22%);
  border-radius: 4px;
  /* here we use the dynamically computed prop */
  margin: 0.5em 1em;
  padding: 1em;
  &:active {
    border: none;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%), 0 2px 3px rgb(0 0 0 / 22%);
  }
  &:focus {
    border: none;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%), 0 2px 3px rgb(0 0 0 / 22%);
    outline: none;
  }
`;
const SelectCu = styled.select`
  color: ${Pallets.black};
  width: 75%;
  font-size: 18px;
  font-weight: 500;
  border: 0;
  box-shadow: 0 0 3px rgb(0 0 0 / 25%), 0 0 0 rgb(0 0 0 / 22%);
  border-radius: 4px;
  /* here we use the dynamically computed prop */
  margin: 0.5em 1em;
  padding: 1em;
  &:active {
    border: none;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%), 0 2px 3px rgb(0 0 0 / 22%);
  }
  &:focus {
    border: none;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%), 0 2px 3px rgb(0 0 0 / 22%);
    outline: none;
  }
`;
export { InputCu, TitleInput, BoxInput, TextAreaCu, SelectCu };
