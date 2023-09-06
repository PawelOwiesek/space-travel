import { styled } from "styled-components";
import { theme } from "../../../theme";

export const Image = styled.img`
  @media (max-width: ${theme.breakpoints.small}) {
    width: 6rem;
    height: 6rem;
    margin: 2rem auto;
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
  max-width: 300px;
  margin-top: 1rem;
`;

export const Header = styled.h2`
  @media (max-width: ${theme.breakpoints.small}) {
    display: flex;
    font-family: ${theme.fonts.familyBarlowCondensed};
    font-size: ${theme.fontSize.normal};
    gap: ${theme.gap.gapNormal};
    letter-spacing: 0.16875rem;
    text-transform: uppercase;
  }
`;

export const Number = styled.span`
  @media (max-width: ${theme.breakpoints.small}) {
    font-family: ${theme.fonts.familyBarlowCondensed};
    font-size: ${theme.fontSize.normal};
    letter-spacing: 0.16875rem;
    color: hsl(${theme.colors.light} / 40%);
  }
`;

export const Container = styled.div`
  @media (max-width: ${theme.breakpoints.small}) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-width: 300px;
  }
`;

export const Planet = styled.h1`
  @media (max-width: ${theme.breakpoints.small}) {
    color: hsl(${theme.colors.white});
    text-transform: uppercase;
    font-family: ${theme.fonts.familyBellefair};
    padding-top: 2rem;
    font-size: ${theme.fontSize.heading4};
  }
`;

export const Description = styled.p`
  max-width: 300px;
  color: hsl(${theme.colors.light});
  text-align: center;
  font-size: ${theme.fontSize.small};
  font-style: normal;
  line-height: 1.4;
  border-bottom: 1px solid hsl(${theme.colors.light} / 20%);
  padding-bottom: 0.5rem;
`;

export const DistanceWrapper = styled.div`
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
`;

export const Distance = styled.p`
  font-size: ${theme.fontSize.medium};
  font-family: ${theme.fonts.familyBellefair};
  color: hsl(${theme.colors.white});
`;
