// React imports
import { useState } from "react";

// Context imports
import Context from "./context";

// Component imports
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResetButton from "./components/ResetButton";

// Build the App
function App() {
  // Context
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [gameStatus, setGameStatus] = useState(true);
  const [canPlayGame, setCanPlayGame] = useState(false);

  return (
    <main className="flex flex-col p-5 bg-gradient-to-br from-slate-600 to-slate-800 w-full h-screen">
      <Context.Provider
        value={{
          playerScore,
          setPlayerScore,
          compScore,
          setCompScore,
          playerChoice,
          setPlayerChoice,
          compChoice,
          setCompChoice,
          gameResult,
          setGameResult,
          gameStatus,
          setGameStatus,
          canPlayGame,
          setCanPlayGame,
        }}
      >
        <div className="max-w-3xl w-full mx-auto bg-gradient-to-br from-slate-700 to-slate-900 rounded shadow-2xl overflow-hidden">
          <Header />
          <Body />
          <Footer />
        </div>
        <ResetButton />
      </Context.Provider>
    </main>
  );
}

export default App;
