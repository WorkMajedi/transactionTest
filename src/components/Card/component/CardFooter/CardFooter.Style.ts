import styled from 'styled-components/macro';

const CardFooterCu = styled.div`
  border-top: 3px solid #eee;
  width: inherit;
  display: flex;
  flex: 1;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  & {
    @media (max-width: 720px) {
      width: 100%;
      flex-direction: column;
      margin: 10px 0;
    }
  }
`;
export { CardFooterCu };
