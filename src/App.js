import Header from "./components/Header";
import Title from "./components/Title";
import ProjectStats from "./components/ProjectStats";
import PledgeOptions from "./components/PledgeOptions";
import { PledgeProvider } from "./context/PledgeContext";

function App() {
  return (
    <PledgeProvider>
      <div className="font-commissioner leading-loose scroll-smooth">
        <Header />
        <Title />
        <ProjectStats />
        <PledgeOptions />
      </div>
    </PledgeProvider>
  );
}

export default App;
