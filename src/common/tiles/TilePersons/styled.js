import { styled } from "styled-components";
import { theme } from "../../../../src/theme";

export const Container = styled.div`
  color: white;
  width: 100vw;
  margin-left: 10rem;
`;

export const Heading = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.gap.gapMedium};
  margin: 17rem 0 9rem;
`;

export const Number = styled.p`
  color: hsl(${theme.colors.white});
  font-family: ${theme.fonts.familyBarlowCondensed};
  font-size: ${theme.fontSize.heading4};
  letter-spacing: 0.295rem;
  opacity: 0.25;
`;

export const Title = styled(Number)`
  text-transform: uppercase;
  opacity: 1;
`;

export const Role = styled.h3`
  font-size: ${theme.fontSize.heading3};
  font-family: ${theme.fonts.familyBellefair};
  text-transform: uppercase;
  opacity: 0.5042;
`;

export const Name = styled(Role)`
  font-size: ${theme.fontSize.heading2};
  opacity: 1;
`;

export const Description = styled.p`
  font-size: ${theme.fontSize.medium};
  line-height: 2rem;
  color: hsl(${theme.colors.light});
  width: 27.75rem;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 7.5rem;
  gap: ${theme.gap.gapMedium};
`;

export const Button = styled.button`
  color: hsl(${theme.colors.white});
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: ${({ active }) => (active ? 1 : 0.174363)};
  transition: 0.4s;

  &:hover {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImagePerson = styled.img`
  width: 800px;
  height: 800px;
  margin: 14.5rem 20rem 0 0;
`;
