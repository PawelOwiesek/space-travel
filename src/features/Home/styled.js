import { styled } from "styled-components";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin-top: 300px;
// `;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.gap.gapMedium};
`;
export const Header = styled.h2`
  font-size: ${theme.fontSize.heading4};
  text-transform: uppercase;
  color: hsl(${theme.colors.light});
  letter-spacing: 0.29531rem;
  line-height: normal;
  font-family: ${theme.fonts.familyBarlowCondensed};
`;

export const LargeHeader = styled(Header)`
  font-size: ${theme.fontSize.large};
  font-family: ${theme.fonts.familyBellefair};
  color: hsl(${theme.colors.white});
`;

export const Description = styled.p`
  color: hsl(${theme.colors.light});
  width: 27.75rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Text = styled.div`
  display: none;
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
`;

export const LinkBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 17.125rem;
  height: 17.125rem;
  border-radius: 50%;
  background-color: hsl(${theme.colors.white});
`;
