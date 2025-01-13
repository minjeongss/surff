import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

const Modal = () => {
  const element = usePortal("modal");
  return createPortal(<div>I'm a modal!</div>, element);
};

export default Modal;
