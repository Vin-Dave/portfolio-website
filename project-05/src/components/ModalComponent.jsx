import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export const ModalComponent = forwardRef(function ModalComponent(
  { children },
  ref
) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
    close: () => {
      dialogRef.current.close();
    },
  }));

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});
