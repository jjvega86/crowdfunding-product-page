import Header from "./components/Header";
import Title from "./components/Title";
import ProjectStats from "./components/ProjectStats";
import PledgeOptions from "./components/PledgeOptions";
import { PledgeProvider } from "./context/PledgeContext";

function App() {
  return (
    <PledgeProvider>
      <div className="font-commissioner">
        <Header />
        <Title />
        <ProjectStats />
        <PledgeOptions />
      </div>
    </PledgeProvider>
  );
}

export default App;
