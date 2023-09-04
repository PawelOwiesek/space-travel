import { styled } from "styled-components";
import { theme } from "../../theme";

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const Item = styled.li`
  display: flex;
  width: 100vw !important;
  position: relative;
  left: ${({ number }) =>
    number === 0
      ? "0vw"
      : number === 1
      ? "-100vw"
      : number === 2
      ? "-200vw"
      : "-300vw"};
  transition: 2s linear;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    height: 100vh;
    flex-direction: column;
    left: 0;
    top: ${({ number }) =>
      number === 0
        ? "-15vh"
        : number === 1
        ? "-115vh"
        : number === 2
        ? "-215vh"
        : "-315vh"};
    transition: 2s linear;
  }
`;
export const Buttons = styled.div`
  display: flex;
  margin-top: 7.5rem;
  gap: ${theme.gap.gapMedium};
  position: absolute;
  left: 13rem;
  top: 43rem;
  z-index: 4;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    top: 30rem;
    left: 20rem;
  }
`;

export const Button = styled.button`
  color: hsl(${theme.colors.white});
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: ${({ active }) => (active ? 1 : 0.174363)};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.454363;
    transform: scale(1);
  }
`;
