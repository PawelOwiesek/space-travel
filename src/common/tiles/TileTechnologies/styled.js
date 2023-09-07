import { styled } from "styled-components";
import { theme } from "../../../theme";

export const Image = styled.img`
  position: relative;
  width: 37rem;
  margin: 10rem 0 0 30rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    min-width: 100vw;
    max-height: 40rem;
    margin: 0 0 8rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    min-width: 100vw;
    max-height: 23rem;
    margin: 0.5rem 0 5rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    min-width: 70vw;
    max-height: 12em;
    margin: 1rem 0 5rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    min-width: 100vw;
    max-height: 12rem;
    margin: 0 0 6rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    max-height: 10rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    justify-content: center;
  }
`;

export const SubTitle = styled.p`
  text-transform: uppercase;
  width: 450px;
  margin: -8rem 0 0 -15rem;
  font-family: ${theme.fonts.familyBarlowCondensed};
  letter-spacing: 0.18rem;
  color: hsl(${theme.colors.light});
  font-size: ${theme.fontSize.heading5};

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBarlowCondensed};
    letter-spacing: 0.18rem;
    color: hsl(${theme.colors.light});
    font-size: ${theme.fontSize.heading3};
    margin: 2rem 0 0 50%;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    letter-spacing: 0.14rem;
    font-size: ${theme.fontSize.heading5};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.medium};
  }
`;

export const Header = styled.h1`
  margin: 0 -8rem;
  text-transform: uppercase;
  font-family: ${theme.fonts.familyBellefair};
  font-size: ${theme.fontSize.heading2};

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBellefair};
    font-size: ${theme.fontSize.heading1};
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading2};
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.heading4};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.heading3};
  }

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSize.heading4};
  }
`;

export const Description = styled.p`
  color: hsl(${theme.colors.light});
  text-align: left;
  font-size: ${theme.fontSize.medium};
  line-height: 1.5;
  max-width: 35vw;
  position: absolute;
  left: 15rem;
  top: 33rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    padding: 0.5rem 1.5rem;
    color: hsl(${theme.colors.light});
    text-align: center;
    font-size: ${theme.fontSize.heading3};
    line-height: 1.5;
    max-width: 100%;
    position: static;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading4};
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.normal};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.medium};
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSize.normal};
    line-height: 1.5;
  }
`;
