import styled from 'styled-components';

import { Search } from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media(min-width: 1000px){ //so mostrar a side bar em telas maiores q 1000px
    display: flex;
    flex-direction: column;

    width: min(399px, 100%); //min 399px e 100% do conteudo restante
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;

  width: min(399px, 100%);
  max-height: 57px;

  position: fixed;
  top: 0;
  z-index: 2;

  background: var(--primary);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;

  font-size: 14px;
  padding: 0 10px 0 52px;

  border-radius: 19.5px;

  background: var(--search);

  &::placeholder{
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 200ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;
export const Body = styled.div``;