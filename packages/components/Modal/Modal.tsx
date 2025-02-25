import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";
import {
  CloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "./Modal.styles";
import { ModalProps } from "./Modal.d";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import useFadeOutMotion from "../../hooks/useFadeOutMotion";

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  // portal 관련 로직
  const element = usePortal("modal");
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);

  // animation 관련 로직
  const fadeOut = useFadeOutMotion(isOpen);

  if (!element) return null;
  if (!isOpen && fadeOut) return null;

  return createPortal(
    <ModalWrapper ref={ref} $isOpen={isOpen}>
      <ModalHeader>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter></ModalFooter>
    </ModalWrapper>,
    element
  );
};

export default Modal;
