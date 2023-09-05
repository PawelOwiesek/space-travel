import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 1;
  margin-top: 50px;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    margin-top: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 0;
    z-index: 5;
    overflow: hidden;
  }
`;

export const Logo = styled.img`
  margin: 0 53px;
  @media (max-width: ${theme.breakpoints.large}) {
    margin: 20px 0 0 20px;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    margin: 10px 0 0 10px;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const Divider = styled.div`
  width: 61rem;
  height: 0.0625rem;
  opacity: 0.2515;
  background-color: hsl(${theme.colors.white});
  margin-right: -40px;
  z-index: 1;
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    display: none;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51.875rem;
  height: 6rem;
  gap: ${theme.gap.gapXXL};
  color: hsl(${theme.colors.white});
  background-color: hsl(${theme.colors.light} / 0.04);
  backdrop-filter: blur(40.774227142333984px);

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    width: 30rem;
    position: fixed;
    right: 0;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem 0 0 2rem;
    width: 16rem;
    height: 100vh;
    gap: ${theme.gap.gapSmall};
    transform: translateX(100%);
    position: fixed;
    right: -1rem;
    top: 0;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    gap: ${theme.gap.gapLarge};
    padding: 8rem 0 0 2rem;
  }
`;

export const LinkWrapper = styled.p`
  display: flex;
  gap: ${theme.gap.gapSmall};
  font-family: ${theme.fonts.familyBarlowCondensed};
  font-size: ${theme.fontSize.normal};
  letter-spacing: 0.168rem;
  font-weight: 700;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid hsl(${theme.colors.light} / 20%);
    padding: 33px 0;
  }

  border-bottom: ${({ active }) =>
    active ? `4px solid hsl(${theme.colors.white})` : null};
  padding: 33px 0;

  @media (max-width: ${theme.breakpoints.large}) {
    border: none;
    padding: 0;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: hsl(${theme.colors.white});
  text-transform: uppercase;
  font-weight: 400;
`;
export const Number = styled.span`
  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    display: flex;
  }
`;
