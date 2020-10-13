import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  0% {
    top: 100%;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 0.8;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;
