import EmptyProject from "./components/EmptyProject/EmptyProject";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <EmptyProject />
    </main>
  );
}

export default App;
