import { styled } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Item = styled.div`
  display: grid;
  width: 100vw;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  color: white;
`;
