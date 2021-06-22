import styled, { StyledComponent } from 'styled-components';
import { AnyIfEmpty } from 'react-redux';
import { DefaultTheme } from 'styled-components/macro';
import { Pallets } from '../../styles/paletteColor';

const ButtonCu: StyledComponent<
  'button',
  AnyIfEmpty<DefaultTheme>,
  { bg?: string; primary?: boolean | undefined },
  never
> = styled.button`
  cursor: pointer;
  font-size: 16px;
  border-radius: 3px;
  color: ${(props: any) =>
    props.primary ? `${Pallets.light}` : `${Pallets.black}`};
  border: ${(props: any) =>
    !props.primary ? `2px solid ${Pallets.border}` : `0`};
  margin: 0 1em;
  padding: 0.5em 1em;
  transition: 0.5s all ease-out;
  outline: none;
  & {
    @media (max-width: 720px) {
      width: 100%;
      margin: 10px 0;
    }
  }
  &:hover {
    color: ${Pallets.light};
    background-color: ${(props: any) =>
      !props.primary ? Pallets.border : Pallets.hoverPrimary};
  }
  /* The resulting background color will be based on the bg props. */
  background-color: ${(props: any) =>
    props.primary ? Pallets.primary : 'transparent'}; ;
`;
const LinkRouterCu: StyledComponent<
  'div',
  AnyIfEmpty<DefaultTheme>,
  { bg?: string; primary?: boolean | undefined },
  never
> = styled.div`
  & a {
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 3px;
    color: ${(props: any) =>
      props.primary ? `${Pallets.light}` : `${Pallets.black}`};
    border: ${(props: any) =>
      !props.primary ? `2px solid ${Pallets.border}` : `0`};
    margin: 0 1em;
    padding: 0.5em 1em;
    transition: 0.5s all ease-out;
    outline: none;
    & {
      @media (max-width: 720px) {
        width: 100%;
        margin: 10px 0;
      }
    }
    &:hover {
      color: ${Pallets.light};
      background-color: ${(props: any) =>
        !props.primary ? Pallets.border : Pallets.hoverPrimary};
    }
    /* The resulting background color will be based on the bg props. */
    background-color: ${(props: any) =>
      props.primary ? Pallets.primary : 'transparent'};
  }
`;
export { LinkRouterCu, ButtonCu };
