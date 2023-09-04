import { styled } from "styled-components";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.gap.gapMedium};

  @media (max-width: ${theme.breakpoints.large}) {
    justify-content: center;
    align-items: center;
    gap: ${theme.gap.gapSmall};
    margin: 70px 0 0 50px;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    justify-content: center;
    align-items: center;
    gap: ${theme.gap.gapMedium};
    margin: 0;
  }
`;
export const Header = styled.h2`
  font-size: ${theme.fontSize.heading4};
  text-transform: uppercase;
  color: hsl(${theme.colors.light});
  letter-spacing: 0.29531rem;
  line-height: normal;
  font-family: ${theme.fonts.familyBarlowCondensed};

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.normal};
    letter-spacing: 0.16875rem;
  }
`;

export const LargeHeader = styled(Header)`
  font-size: ${theme.fontSize.large};
  font-family: ${theme.fonts.familyBellefair};
  color: hsl(${theme.colors.white});

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading2};
    line-height: 4.25rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.heading2};
    line-height: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSize.heading3};
    line-height: 2rem;
  }
`;

export const Description = styled.p`
  color: hsl(${theme.colors.light});
  width: 27.75rem;

  @media (max-width: ${theme.breakpoints.large}) {
    width: 20rem;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    width: 18rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Text = styled.div`
  position: relative;
  z-index: 4;
  display: grid;
  width: 23.125rem;
  height: 23.125rem;
  border-radius: 50%;
  background-color: transparent;
  place-items: center;
  color: hsl(${theme.colors.dark});
  text-transform: uppercase;
  font-size: ${theme.fontSize.heading3};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.125rem;
  font-family: ${theme.fonts.familyBellefair};

  &:hover {
    background-color: hsl(${theme.colors.dark} / 56%);
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
  }

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.medium};
    height: 12px;
    margin-top: 50px;
    max-width: 150px;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin-top: 100px;
  }
`;

export const LinkBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 17.125rem;
  height: 17.125rem;
  border-radius: 50%;
  background-color: hsl(${theme.colors.white});

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    width: 11.375rem;
    height: 11.375rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    width: 9.375rem;
    height: 9.375rem;
  }
`;
