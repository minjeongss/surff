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

/**
 * @description
 * Portal을 활용한 Modal
 *
 * @param isOpen Modal의 열림/닫힘 여부
 * @param onClose Modal을 닫는 함수
 * @param header Modal의 상단 부분이며, string 또는 ReactNode 사용 가능
 * @param body Modal의 내용 부분이며, string 또는 ReactNode 사용 가능
 * @param position Modal이 나타나는 위치
 */
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
