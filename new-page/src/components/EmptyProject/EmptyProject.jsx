import { useRef } from "react";
import Inputs from "../Inputs/Inputs";
import Modal from "../Modal/Modal";

export default function EmptyProject({ submitForm, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function submitData() {
    const submittedTitle = title.current.value;
    const submittedDescription = description.current.value;
    const submittedDate = dueDate.current.value;

    if (
      submittedTitle.trim() === "" ||
      submittedDate.trim() === "" ||
      submittedDescription.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const newProject = {
      title: submittedTitle,
      description: submittedDescription,
      dueDate: submittedDate,
    };
    submitForm(newProject);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="close">
        <h2 className="text-stone-500 my-5 text-2xl">Information</h2>
        <p className="text-stone-500 mb-5">
          Check that all fields are filled in correctly
        </p>
        <p className="text-stone-500 mb-5">Error</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={submitData}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Inputs type="text" ref={title} label="Title" />
          <Inputs ref={description} label="Description" textarea />
          <Inputs type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
