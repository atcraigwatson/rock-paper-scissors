import { useContext } from "react";
import Context from "../context";

const ResetButton = () => {
  const {
    setPlayerChoice,
    setCompChoice,
    setPlayerScore,
    setCompScore,
    setGameResult,
    setGameStatus,
    setCanPlayGame,
  } = useContext(Context);
  const handleClick = () => {
    setPlayerChoice("Make a choice");
    setCompChoice("I'm waiting...");
    setPlayerScore(0);
    setCompScore(0);
    setGameResult("Waiting on you...");
    setGameStatus(true);
    setCanPlayGame(false);
    console.log("You reset the game");
  };
  return (
    <button
      onClick={handleClick}
      className="px-5 py-3 mx-auto mt-10 text-slate-400 bg-transparent rounded hover:bg-slate-700"
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
