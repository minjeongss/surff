import { ReactNode } from "react";

export type PositionType = "top" | "center" | "bottom";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: PositionType;
  header: ReactNode;
  body: ReactNode;
}
