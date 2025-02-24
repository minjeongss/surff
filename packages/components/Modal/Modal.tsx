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
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  // portal 관련 로직
  const element = usePortal("modal");
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);

  // animation 관련 로직
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    let timeoutId = null;
    if (isOpen) setClosed(false);
    else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 400);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen]);

  if (!element) return null;
  if (!isOpen && closed) return null;

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
