import { styled } from "styled-components";
import { theme } from "../../../../src/theme";

export const Container = styled.div`
  color: white;
  width: 100vw;
  margin-left: 10rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    margin: -10rem 0 0 5rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    margin: -1rem 0 0 10rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 4rem 0 4rem -6rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 4rem 0;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    margin: 0;
  }
`;

export const Heading = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.gap.gapMedium};
  margin: 17rem 0 9rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    margin: 15rem 0 6rem -5rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    margin: 6rem 0 1rem -10rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 1rem 0 0 5rem;
    padding-bottom: 0.5rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 1rem 0 2rem 0rem;
    padding-bottom: 2rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    margin: 4rem 0 2rem 0rem;
    padding-bottom: 2.5rem;
  }
`;

export const Number = styled.p`
  color: hsl(${theme.colors.white});
  font-family: ${theme.fonts.familyBarlowCondensed};
  font-size: ${theme.fontSize.heading4};
  letter-spacing: 0.295rem;
  opacity: 0.25;

  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSize.medium};
  }

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSize.normal};
  }
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

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-size: ${theme.fontSize.heading3};
    margin-left: 2rem;
    opacity: 0.4994;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    margin-left: -15rem;
    font-size: ${theme.fontSize.normal};
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: 0 0 0 -5rem;
    font-size: ${theme.fontSize.small};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 280px 0 0 -6rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    margin: 250px 0 0 -6rem;
  }
`;

export const Name = styled(Role)`
  font-size: ${theme.fontSize.heading2};
  opacity: 1;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-size: ${theme.fontSize.heading3};
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.heading4};
    margin-left: -15rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin: -2px 0 0 0;
    font-size: ${theme.fontSize.medium};
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin: -2px 0 0 -80px;
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSize.medium};
  line-height: 2rem;
  color: hsl(${theme.colors.light});
  width: 27.75rem;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    font-size: ${theme.fontSize.medium};
    line-height: 1.75rem;
    text-align: center;
    max-width: 37rem;
    margin-left: -6rem;
    padding-left: 0.5rem;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    font-size: ${theme.fontSize.normal};
    line-height: 1.75rem;
    margin-left: -10rem;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    margin-left: 4rem;
    font-size: ${theme.fontSize.small};
    max-width: 21rem;
    line-height: 1.3rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    margin-left: -2rem;
    line-height: 1.4rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    max-width: 19rem;
    line-height: 1.2rem;
  }
`;

export const ImagePerson = styled.img`
  width: 800px;
  height: 699px;
  margin: 14.5rem 11rem 0 0;
  border-bottom: 1px solid grey;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    width: 18rem;
    height: 25rem;
    margin: 10rem 15rem 0 0;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    width: 12rem;
    height: 15rem;
    margin: 6rem 42rem 0 3rem;

    @media (max-width: ${theme.breakpoints.large}) {
      width: 9rem;
      height: 11rem;
      margin: 5rem 6rem 0 3rem;
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      width: 11rem;
      height: 14rem;
      margin: -32rem 0 0 3rem;
    }

    @media (max-width: ${theme.breakpoints.small}) {
      max-width: 9rem;
      height: 11rem;
      margin: -25rem 0 0 3rem;
    }
  }
`;
