import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef(function Modal({ result, timeTarget }, ref) {
  const modal = useRef();
  useImperativeHandle(ref, () => {
    return {
      show() {
        modal.current.showModal();
      },
    };
  });
  return (
    <dialog ref={modal} className="result-modal">
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{timeTarget} seconds.</strong>
      </p>
      <p>
        You stoped the timer with <strong>x seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
