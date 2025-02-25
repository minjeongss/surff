import styled from "styled-components";
import { fadeIn, fadeOut } from "../../lib/animation";
import { PositionType } from "./Modal.d";

export const ModalWrapper = styled.div<{
  $isOpen: boolean;
  $position: PositionType;
}>`
  position: fixed;
  ${({ $position }) =>
    $position === "bottom"
      ? "bottom: 0; left: 50%; transform: translateX(-50%);"
      : $position === "center"
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%);"
      : "top: 0; left: 50%; transform: translateX(-50%);"}
  width: 50%;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.4s forwards
    ease-in-out;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalBody = styled.div``;

export const CloseButton = styled.img.attrs({
  src: "/packages/assets/x.png",
  alt: "x icon",
})`
  width: 15px;
  height: 15px;

  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
