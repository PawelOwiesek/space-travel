import { styled } from "styled-components";
import { theme } from "../../../theme";

export const Image = styled.img`
  position: relative;
  max-width: 22rem;
  margin: 0 10rem 0 0;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    max-width: 18rem;
    max-height: 18rem;
    margin: 5rem 0 0;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    max-width: 10rem;
    max-height: 10rem;
    margin: 0.5rem auto;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    min-width: 70vw;
    max-height: 12em;
    margin: 1rem 0 5rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    min-width: 100vw;
    max-height: 10rem;
    margin: 0 0 6rem;
  }
`;

export const Content = styled.div`
  @media (max-width: ${theme.breakpoints.large}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    justify-content: center;
  }
`;

export const SubTitle = styled.p`
  @media (max-width: ${theme.breakpoints.large}) {
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBarlowCondensed};
    letter-spacing: 0.14rem;
    color: hsl(${theme.colors.light});
    font-size: ${theme.fontSize.heading5};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.medium};
  }
`;

export const Header = styled.h1`
  @media (max-width: ${theme.breakpoints.large}) {
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBellefair};
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
  @media (max-width: ${theme.breakpoints.large}) {
    padding: 0.5rem 1.5rem;
    color: hsl(${theme.colors.light});
    text-align: center;
    font-size: ${theme.fontSize.normal};
    line-height: 1.5;
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
