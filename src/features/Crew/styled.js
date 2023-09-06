import { styled } from "styled-components";
import { theme } from "../../theme";

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    margin: 0;
    flex-direction: column;
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
    height: 100vh !important;
    flex-direction: row;
    left: 0;
    top: ${({ number }) =>
      number === 0
        ? "0vh"
        : number === 1
        ? "-100vh"
        : number === 2
        ? "-200vh"
        : "-300vh"};
    transition: 2s linear;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    text-align: center;
    flex-direction: row;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    text-align: center;
    flex-direction: column;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    text-align: center;
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
    top: 25rem;
    left: 15rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    top: 14rem;
    left: 31rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    left: 22rem;
    top: 10rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    left: 4rem;
    top: 16rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    left: 3rem;
    top: 14rem;
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

  @media (max-width: ${theme.breakpoints.large}) {
    width: 15px;
    height: 15px;
    margin-right: -10px;
  }
`;
