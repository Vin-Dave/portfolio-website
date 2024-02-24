import React, { forwardRef, useRef } from "react";

export const Modal = forwardRef(function Modal({ result, timeTarget }, ref) {
  const showModal = useRef;
  return (
    <dialog ref={ref} className="result-modal">
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
