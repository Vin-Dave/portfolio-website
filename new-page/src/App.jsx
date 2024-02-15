import { useReducer, useState } from "react";
import EmptyProject from "./components/EmptyProject/EmptyProject";
import { NoneSelectedProject } from "./components/NoneSelectedProject/NoneSelectedProject";
import Sidebar from "./components/Sidebar/Sidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";
import { stateProjectReducer } from "./StateProjectReducer/stateProjectReducer";

function App() {
  const [{ selectedProject, projects }, dispach] = useReducer(
    stateProjectReducer,
    {
      selectedProject: undefined,
      projects: [],
    }
  );

  const note = projects.find((element) => element.id === selectedProject);

  let content;

  if (selectedProject === undefined) {
    content = (
      <NoneSelectedProject onclick={() => dispach({ type: "show_panel" })} />
    );
  } else if (selectedProject === null) {
    content = (
      <EmptyProject
        submitForm={(project) => dispach({ type: "add_task", project })}
        onCancel={() => dispach({ type: "hide_panel" })}
      />
    );
  } else {
    content = (
      <SelectedProject
        memo={note}
        deleteNote={(id) => dispach({ type: "delete_note", id })}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onclick={() => dispach({ type: "show_panel" })}
        memo={projects}
        clickShowMemo={(id) => dispach({ type: "select_id", id })}
      />
      {content}
    </main>
  );
}

export default App;
