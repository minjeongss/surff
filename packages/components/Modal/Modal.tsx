import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";
import { ModalWrapper } from "./Modal.styles";
import { useState } from "react";

const Modal = () => {
  const element = usePortal("modal");
  const [isOpen, setIsOpen] = useState(false);

  if (!element) return null;

  return (
    <>
      <p>Modal {isOpen ? "ON" : "OFF"}</p>
      {createPortal(
        <ModalWrapper>
          <p>Modal ⚡</p>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            Modal Toggle
          </button>
        </ModalWrapper>,
        element
      )}
    </>
  );
};

export default Modal;
