import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";
import {
  CloseButton,
  ModalBody,
  ModalHeader,
  ModalWrapper,
} from "./Modal.styles";
import { ModalProps } from "./Modal.d";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import useFadeOutMotion from "../../hooks/useFadeOutMotion";

const Modal = ({
  isOpen,
  onClose,
  header,
  body,
  position = "center",
}: ModalProps) => {
  // portal 관련 로직
  const element = usePortal("modal");
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);

  // animation 관련 로직
  const fadeOut = useFadeOutMotion({ isOpen, executionTimeout: 400 });

  if (!element) return null;
  if (!isOpen && fadeOut) return null;

  return createPortal(
    <ModalWrapper ref={ref} $isOpen={isOpen} $position={position}>
      <ModalHeader>
        <div>{header}</div>
        <CloseButton onClick={onClose} />
      </ModalHeader>
      <ModalBody>{body}</ModalBody>
    </ModalWrapper>,
    element
  );
};

export default Modal;
