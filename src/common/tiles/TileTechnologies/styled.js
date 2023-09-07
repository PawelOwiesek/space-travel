import { styled } from "styled-components";
import { theme } from "../../../theme";

export const Image = styled.img`
  position: relative;
  max-width: 22rem;
  margin: 0 10rem 0 0;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    min-width: 100vw;
    max-height: 34rem;
    margin: 0 auto 3rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    min-width: 100vw;
    max-height: 23rem;
    margin: 0.5rem auto;
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
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
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
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBarlowCondensed};
    letter-spacing: 0.18rem;
    color: hsl(${theme.colors.light});
    font-size: ${theme.fontSize.heading3};
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
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    padding: 0.5rem 1.5rem;
    color: hsl(${theme.colors.light});
    text-align: center;
    font-size: ${theme.fontSize.heading3};
    line-height: 1.5;
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
