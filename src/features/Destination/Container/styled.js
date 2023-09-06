import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  background-image: url("https://i.postimg.cc/NFCxpRV9/background-destination-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    background-image: url("https://i.postimg.cc/wvLP4xYc/background-destination-tablet.jpg");
  }

  @media (max-width: 450px) {
    background-image: url("https://i.postimg.cc/tJdKJqrC/background-destination-mobile.jpg");
  }
`;
