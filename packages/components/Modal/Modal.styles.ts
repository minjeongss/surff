import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border: 2px solid black;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.4s forwards
    ease-in-out;
`;

export const ModalHeader = styled.div``;

export const ModalBody = styled.div``;

export const ModalFooter = styled.div``;

export const CloseButton = styled.button``;
