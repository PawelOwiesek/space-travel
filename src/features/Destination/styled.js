import { styled } from "styled-components";
import { theme } from "../../theme";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  overflow-x: hidden;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  width: 100vw;
  justify-items: center;
  flex-direction: row;
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
  color: white;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    flex-direction: row;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.gap.gapSmall};
  position: absolute;
  top: 110px;
  left: 42%;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    top: 500px;
    left: auto;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    margin: 0 70px;
    top: 270px;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 0 60px;
    top: 260px;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    top: 250px;
    margin: 0;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    top: 200px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: hsl(${theme.colors.light} / 88%);
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.14rem;
  font-size: ${theme.fontSize.small};
  font-family: ${theme.fonts.familyBarlowCondensed};
  border: none;
  border-bottom: 0.25rem solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 0.25rem solid hsl(${theme.colors.light} / 20%);
    padding: 0.29rem 0;

    @media (max-width: ${theme.breakpoints.ipadSmall}) {
      padding: 0.29rem 0;
      border-bottom: 0.25rem solid hsl(${theme.colors.white});
    }
  }
  border-bottom: ${({ active }) =>
    active ? `0.25rem solid hsl(${theme.colors.white})` : null};
  padding: 0.29rem 0;
`;
