import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

const Modal = () => {
  const element = usePortal("modal");
  return createPortal(<div>Modal</div>, document.body);
};

export default Modal;
