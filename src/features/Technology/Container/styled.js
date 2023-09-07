import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("https://i.postimg.cc/HkqPcSxP/background-technology-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100vw;

  @media (max-width: 1024px) {
    background-image: url("https://i.postimg.cc/HkqPcSxP/background-technology-desktop.jpg");
  }

  @media (max-width: 450px) {
    background-image: url("https://i.postimg.cc/xCCH0QQr/background-technology-mobile.jpg");
  }
`;
