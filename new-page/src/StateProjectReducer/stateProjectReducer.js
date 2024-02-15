export function stateProjectReducer(state, action) {
  switch (action.type) {
    case "show_panel":
      return { ...state, selectedProject: null };
    case "hide_panel":
      return { ...state, selectedProject: undefined };

    case "add_task":
      return {
        selectedProject: undefined,
        projects: [
          ...state.projects,
          { ...action.project, id: state.projects.at(-1)?.id + 1 || 1 },
        ],
      };
    case "select_id":
      return {
        ...state,
        selectedProject: action.id,
      };
    case "delete_note":
      return {
        selectedProject: undefined,
        projects: [
          ...state.projects.filter((element) => element.id !== action.id),
        ],
      };
  }

  return state;
}
