import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../theme";
import { ReactComponent as logo } from "../images/logo.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 1;
  margin-top: 50px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Logo = styled(logo)`
  margin: 0 53px;
`;

export const Divider = styled.div`
  width: 61rem;
  height: 0.0625rem;
  opacity: 0.2515;
  background-color: hsl(${theme.colors.white});
  margin-right: -40px;
  z-index: 1;
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
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: hsl(${theme.colors.white});
  text-transform: uppercase;
  font-weight: 400;
`;
export const Number = styled.span``;
