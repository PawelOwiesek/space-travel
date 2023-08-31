import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("https://i.postimg.cc/Mp3xBYwk/background-crew-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    background-image: url("https://i.postimg.cc/BZmh47BG/background-crew-tablet.jpg");
  }

  @media (max-width: 450px) {
    background-image: url("https://i.postimg.cc/KcC01kw9/background-crew-mobile.jpg");
  }
`;
