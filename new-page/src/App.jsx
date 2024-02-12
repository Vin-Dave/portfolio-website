import { useState } from "react";
import EmptyProject from "./components/EmptyProject/EmptyProject";
import { NoneSelectedProject } from "./components/NoneSelectedProject/NoneSelectedProject";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [stateProject, setStateProject] = useState({
    selectedProject: undefined,
    projects: [],
  });

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
  } else if (stateProject.selectedProject === null) content = <EmptyProject />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onclick={showForm} />
      {content}
    </main>
  );
}

export default App;
