import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.postimg.cc/Mp3xBYwk/background-crew-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.ipadMedium}) {
    background-image: url("https://i.postimg.cc/BZmh47BG/background-crew-tablet.jpg");
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 450px) {
    background-image: url("https://i.postimg.cc/KcC01kw9/background-crew-mobile.jpg");
  }
`;
