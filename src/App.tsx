import "./App.css";
import SolutionDesigner from "./solutionDesigner/views/SolutionDesigner";
import TopMenu from "./shared/TopMenu";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <SolutionDesigner />
    </div>
  );
}

export default App;
