import { useState } from "react";
import EmptyProject from "./components/EmptyProject/EmptyProject";
import { NoneSelectedProject } from "./components/NoneSelectedProject/NoneSelectedProject";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [stateProject, setStateProject] = useState({
    selectedProject: undefined,
    projects: [],
  });

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
  let content;

  if (stateProject.selectedProject === undefined) {
    content = <NoneSelectedProject onclick={showForm} />;
  } else if (stateProject.selectedProject === null)
    content = (
      <EmptyProject submitForm={handleAddNote} onCancel={handleCancelSubmit} />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onclick={showForm} memo={stateProject.projects} />
      {content}
    </main>
  );
}

export default App;
