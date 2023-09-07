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
  height: 100vh;
  justify-items: center;
  flex-direction: row;
  position: relative;
  left: ${({ number }) =>
    number === 0 ? "0vw" : number === 1 ? "-100vw" : "-200vw"};
  transition: 2s linear;
  color: white;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    align-items: flex-start;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    align-items: center;
    margin-top: 5rem;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.gap.gapSmall};
  position: absolute;
  top: 110px;
  left: 42%;
  width: 100%;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    top: 500px;
    left: auto;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    margin: 0 70px;
    top: 270px;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 0 auto;
    top: 280px;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    top: 300px;
    margin: 0 auto;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    top: 270px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-family: ${theme.fonts.familyBellefair};
  text-align: center;
  color: ${({ active }) =>
    active ? `hsl(${theme.colors.dark})` : `hsl(${theme.colors.white})`};
  font-size: ${theme.fontSize.medium};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  border: 0.17rem solid hsl(${theme.colors.light} / 20%);
  cursor: pointer;

  &:hover {
    background-color: hsl(${theme.colors.white} / 20%);
    padding: 0.29rem 0;

    @media (max-width: ${theme.breakpoints.ipadSmall}) {
      padding: 0.29rem 0;
      background-color: hsl(${theme.colors.light} / 20%);
    }
  }
  background-color: ${({ active }) =>
    active ? `hsl(${theme.colors.white})` : null};
  padding: 0.29rem 0;
`;

export const SubTitle = styled.div`
  color: hsl(${theme.colors.white});
  display: flex;
  font-family: ${theme.fonts.familyBarlowCondensed};
  font-size: ${theme.fontSize.heading3};
  gap: ${theme.gap.gapNormal};
  letter-spacing: 0.16875rem;
  text-transform: uppercase;
  margin-bottom: 6rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-size: ${theme.fontSize.heading2};
    margin: 8rem auto;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading4};
    margin: 3rem auto;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.medium};
    margin: 1rem auto;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 2rem;
  }
`;

export const Number = styled.p`
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-family: ${theme.fonts.familyBarlowCondensed};
    font-size: ${theme.fontSize.heading2};
    letter-spacing: 0.16875rem;
    color: hsl(${theme.colors.light} / 60%);
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading4};
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.medium};
  }
`;
