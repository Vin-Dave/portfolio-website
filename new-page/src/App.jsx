import { useState } from "react";
import EmptyProject from "./components/EmptyProject/EmptyProject";
import { NoneSelectedProject } from "./components/NoneSelectedProject/NoneSelectedProject";
import Sidebar from "./components/Sidebar/Sidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

function App() {
  const [stateProject, setStateProject] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const note = stateProject.projects.find(
    (element) => element.id === stateProject.selectedProject
  );

  function handleAddNote(project) {
    setStateProject((prevState) => {
      return {
        selectedProject: undefined,
        projects: [
          ...prevState.projects,

          { ...project, id: prevState.projects.at(-1)?.id + 1 || 1 },
        ],
      };
    });
  }

  function handleCancelSubmit() {
    setStateProject((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }
  function showForm() {
    setStateProject((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }
  function handleDeleteNote(id) {
    setStateProject((prevState) => {
      return {
        selectedProject: undefined,
        projects: [
          ...prevState.projects.filter((element) => element.id !== id),
        ],
      };
    });
  }

  function handleShowModalMemo(id) {
    console.log(2);
    setStateProject((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  let content;

  if (stateProject.selectedProject === undefined) {
    content = <NoneSelectedProject onclick={showForm} />;
  } else if (stateProject.selectedProject === null) {
    content = (
      <EmptyProject submitForm={handleAddNote} onCancel={handleCancelSubmit} />
    );
  } else {
    content = <SelectedProject memo={note} deleteNote={handleDeleteNote} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onclick={showForm}
        memo={stateProject.projects}
        clickShowMemo={handleShowModalMemo}
      />
      {content}
    </main>
  );
}

export default App;
