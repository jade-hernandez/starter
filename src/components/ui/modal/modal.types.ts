import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { modalVariants } from "./modal";

export interface IModalProps extends VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  preventScroll?: boolean;
  className?: string;
  overlayClassName?: string;
}
