import { styled } from "styled-components";

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
