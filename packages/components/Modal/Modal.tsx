import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";
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

  const positionClasses = {
    bottom: "fixed bottom-0 left-1/2 transform -translate-x-1/2",
    center:
      "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    top: "fixed top-0 left-1/2 transform -translate-x-1/2",
  };

  return createPortal(
    <div
      ref={ref}
      className={`
      ${positionClasses[position]} 
      w-1/2 p-4 rounded-lg bg-white shadow-md
      ${isOpen ? "animate-fadeIn" : "animate-fadeOut"}`}
    >
      <div className="flex flex-row justify-between items-center mb-2">
        <div>{header}</div>
        <div
          onClick={onClose}
          className="hover:bg-gray-100 hover:rounded-full cursor-pointer flex items-center justify-center"
        >
          <img
            src="/packages/assets/x.png"
            alt="x icon"
            className="w-[15px] h-[15px]"
          />
        </div>
      </div>
      <div>{body}</div>
    </div>,
    element
  );
};

export default Modal;
