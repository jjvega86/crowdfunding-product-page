import Header from "./components/Header";
import Title from "./components/Title";
import ProjectStats from "./components/ProjectStats";
import PledgeOptions from "./components/PledgeOptions";

function App() {
  return (
    <div className="font-commissioner">
      <Header />
      <Title />
      <ProjectStats />
      <PledgeOptions />
    </div>
  );
}

export default App;
