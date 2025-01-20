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

const Modal = ({ children, isOpen, onToggle }: ModalProps) => {
  const element = usePortal("modal");
  const ref = useRef(null);
  useOnClickOutside(ref, onToggle);

  if (!element) return null;

  return createPortal(
    isOpen ? (
      <ModalWrapper ref={ref}>
        <ModalHeader>
          <CloseButton onClick={onToggle}>X</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalWrapper>
    ) : null,
    element
  );
};

export default Modal;
