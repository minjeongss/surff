import { ReactNode } from "react";

export type PositionType = "center" | "bottom" | "top";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: PositionType;
  header: ReactNode;
  body: ReactNode;
}
