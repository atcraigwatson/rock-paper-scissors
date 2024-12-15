import { useContext } from "react";
import Context from "../context";

const NextRoundButton = () => {
  const {
    setPlayerChoice,
    setCompChoice,
    setGameResult,
    setGameStatus,
    setCanPlayGame,
  } = useContext(Context);
  const handleClick = () => {
    setPlayerChoice("Make a choice");
    setCompChoice("I'm waiting...");
    setGameResult("Waiting on you...");
    setGameStatus(true);
    setCanPlayGame(false);
    console.log("You moved to the next round");
  };
  return (
    <button
      onClick={handleClick}
      className="px-5 py-3 bg-white bg-opacity-10  text-white w-full hover:bg-opacity-15"
    >
      Start Next Round
    </button>
  );
};

export default NextRoundButton;
