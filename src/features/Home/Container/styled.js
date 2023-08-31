import styled from "styled-components";

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

  @media (max-width: 1024px) {
    background-image: url("https://i.postimg.cc/Znbb29s8/background-home-tablet.jpg");
  }

  @media (max-width: 450px) {
    background-image: url("https://i.postimg.cc/XqCR2n4f/background-home-mobile.jpg");
  }
`;
