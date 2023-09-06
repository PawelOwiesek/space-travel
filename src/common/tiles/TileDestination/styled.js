import { styled } from "styled-components";
import { theme } from "../../../theme";

export const Image = styled.img`
  width: 300px;
  height: 300px;
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

export const Wrapper = styled.div`
  display: flex;
  gap: ${theme.gap.gapSmall};
`;

export const Button = styled.button`
  background-color: transparent;
  color: hsl(${theme.colors.light} / 88%);
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.14rem;
  font-size: ${theme.fontSize.small};
  font-family: ${theme.fonts.familyBarlowCondensed};
  border: none;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid hsl(${theme.colors.light} / 20%);
    padding: 5px 0;
    @media (max-width: ${theme.breakpoints.ipadSmall}) {
      border: none;
      padding: 0;
    }
  }
  border-bottom: ${({ index }) =>
    index ? `4px solid hsl(${theme.colors.white})` : null};
  padding: 5px 0;

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    border: none;
    padding: 0;
  }
`;
