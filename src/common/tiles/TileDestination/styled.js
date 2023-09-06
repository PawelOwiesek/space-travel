import { styled } from "styled-components";
import { theme } from "../../../theme";

export const Image = styled.img`
  position: relative;

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    max-width: 10rem;
    max-height: 10rem;
    margin: 0.5rem auto;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 2rem auto;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    width: 6rem;
    height: 6rem;
  }

  animation: spin 200s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 30px;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 1rem;
    padding: 0;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 1rem;
  }
`;

export const Header = styled.h2`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    display: flex;
    font-family: ${theme.fonts.familyBarlowCondensed};
    font-size: ${theme.fontSize.heading5};
    gap: ${theme.gap.gapNormal};
    letter-spacing: 0.16875rem;
    text-transform: uppercase;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.normal};
    margin-left: 100px;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 0;
  }
`;

export const Number = styled.span`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-family: ${theme.fonts.familyBarlowCondensed};
    font-size: ${theme.fontSize.heading5};
    letter-spacing: 0.16875rem;
    color: hsl(${theme.colors.light} / 40%);
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.normal};
  }
`;

export const Container = styled.div`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const Planet = styled.h1`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    color: hsl(${theme.colors.white});
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBellefair};
    padding-top: 2rem;
    font-size: ${theme.fontSize.heading4};
  }
`;

export const Description = styled.p`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    max-width: 450px;
    color: hsl(${theme.colors.light});
    text-align: center;
    font-size: ${theme.fontSize.normal};
    font-style: normal;
    line-height: 1.4;
    border-bottom: 1px solid hsl(${theme.colors.light} / 20%);
    padding-bottom: 0.5rem;
    margin: 0 1rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.small};
  }
`;

export const DistanceWrapper = styled.div`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    display: flex;
    justify-content: center;
    align-items: last baseline;
    gap: ${theme.gap.gapSmall};
    padding-top: 0.2rem;
    text-transform: uppercase;
    color: hsl(${theme.colors.light});
    letter-spacing: 0.14763rem;
    font-size: ${theme.fontSize.small};
    font-family: ${theme.fonts.familyBarlowCondensed};
  }
`;

export const Distance = styled.p`
  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.medium};
    font-family: ${theme.fonts.familyBellefair};
    color: hsl(${theme.colors.white});
  }
`;
