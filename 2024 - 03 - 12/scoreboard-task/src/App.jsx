import "./App.css";
import Scoreboard from "./components/Scoreboard";
import ScoreContextProvider from "./contexts/ScoreContext";
import Infoboard from "./components/Infoboard";

function App() {
  return (
    <>
      <ScoreContextProvider>
        <Scoreboard />
        <Infoboard />
      </ScoreContextProvider>
    </>
  );
}

export default App;
