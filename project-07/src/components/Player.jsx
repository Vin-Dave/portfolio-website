import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);

  const nameRef = useRef();
  console.log(nameRef);
  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input ref={nameRef} type="text" />
        <button
          onClick={() => {
            setEnteredName(nameRef.current.value);
            nameRef.current.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
