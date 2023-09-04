import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("https://i.postimg.cc/50DHwrYT/background-home-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100vw;
  height: 100vh;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    /* flex-direction: column; */
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.ipadSmall}) {
    background-image: url("https://i.postimg.cc/Znbb29s8/background-home-tablet.jpg");
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.large}) {
    background-image: url("https://i.postimg.cc/XqCR2n4f/background-home-mobile.jpg");
    flex-direction: row;
    justify-content: space-around;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    flex-direction: column;
    justify-content: center;
  }
`;
