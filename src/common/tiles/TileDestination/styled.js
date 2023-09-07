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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 4rem 0 0 12rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    flex-direction: row;
    margin: 70px 0 0;
    padding: 30px;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    flex-direction: column;
    align-items: center;
    margin: 20px;
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
  display: flex;
  font-family: ${theme.fonts.familyBarlowCondensed};
  font-size: ${theme.fontSize.heading3};
  gap: ${theme.gap.gapNormal};
  letter-spacing: 0.16875rem;
  text-transform: uppercase;
  margin-bottom: 6rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    margin-left: -20rem;
    margin-bottom: 0;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading5};
    margin: 0;
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
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-family: ${theme.fonts.familyBarlowCondensed};
    font-size: ${theme.fontSize.heading3};
    letter-spacing: 0.16875rem;
    color: hsl(${theme.colors.light} / 40%);
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading5};
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.normal};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 850px;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    text-align: center;
  }
`;

export const Planet = styled.h1`
  color: hsl(${theme.colors.white});
  text-transform: uppercase;
  font-family: ${theme.fonts.familyBellefair};
  padding-top: 8rem;
  font-size: ${theme.fontSize.large};

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-size: ${theme.fontSize.heading2};
    padding-top: 2rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading4};
  }
`;

export const Description = styled.p`
  border-bottom: 1px solid hsl(${theme.colors.light} / 20%);
  padding: 0 0 4rem 0;
  color: hsl(${theme.colors.light});
  font-size: ${theme.fontSize.heading5};
  font-style: normal;
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    max-width: 750px;
    padding: 0 0 0.5rem 0;
    margin: 0 1rem;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    max-width: 450px;
    font-size: ${theme.fontSize.normal};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.small};
  }
`;

export const DistanceWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${theme.gap.gapSmall};
  padding-top: 1rem;
  text-transform: uppercase;
  color: hsl(${theme.colors.light});
  letter-spacing: 0.14763rem;
  font-size: ${theme.fontSize.heading5};
  font-family: ${theme.fonts.familyBarlowCondensed};

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    justify-content: center;
    align-self: center;
    padding-top: 0.2rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    align-items: last baseline;
    font-size: ${theme.fontSize.small};
  }
`;

export const Distance = styled.p`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-size: ${theme.fontSize.heading4};
    font-family: ${theme.fonts.familyBellefair};
    color: hsl(${theme.colors.white});
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.medium};
  }
`;
