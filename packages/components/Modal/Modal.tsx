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

const Modal = ({ children, isOpen, onToggle }: ModalProps) => {
  const element = usePortal("modal");

  if (!element) return null;

  return createPortal(
    isOpen ? (
      <ModalWrapper>
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
