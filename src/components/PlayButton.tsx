import { useContext } from "react";
import { trackPlayersChoice } from "./ChoiceButton";
import Context from "../context";

// Variable to track the comp choice. Needed for the game logic
// outside the state/context of react.
export let trackCompChoice = "";
export let trackResult = "";

// Create the PlayButton component
const PlayButton = () => {
  const {
    setCompChoice,
    setPlayerScore,
    setCompScore,
    setGameResult,
    setGameStatus,
    canPlayGame,
  } = useContext(Context);

  const handleClick = () => {
    // Generate the random number to be used when creating the
    // the computer choice.
    const randomNumber = Math.random();

    // Use the randomNumber to create the computer choice
    if (randomNumber < 0.34) {
      trackCompChoice = "Rock";
    } else if (randomNumber <= 0.67) {
      trackCompChoice = "Paper";
    } else {
      trackCompChoice = "Scissors";
    }

    setCompChoice(trackCompChoice);
    console.log(`Comp chose ${trackCompChoice}`);

    if (trackPlayersChoice === trackCompChoice) {
      trackResult = "Result - It was a draw...";
      console.log(trackResult);
    } else if (trackPlayersChoice === "Rock") {
      if (trackCompChoice === "Scissors") {
        trackResult = "Result - You won!!";
        console.log(trackResult);
        setPlayerScore((prev) => prev + 1);
      } else {
        trackResult = "Result - You loose!!";
        console.log(trackResult);
        setCompScore((prev) => prev + 1);
      }
    } else if (trackPlayersChoice === "Paper") {
      if (trackCompChoice === "Rock") {
        trackResult = "Result - You won!!";
        console.log(trackResult);
        setPlayerScore((prev) => prev + 1);
      } else {
        trackResult = "Result - You loose!!";
        console.log(trackResult);
        setCompScore((prev) => prev + 1);
      }
    } else if (trackPlayersChoice === "Scissors") {
      if (trackCompChoice === "Rock") {
        trackResult = "Result - You loose!!";
        console.log(trackResult);
        setCompScore((prev) => prev + 1);
      } else {
        trackResult = "Result - You won!!";
        console.log(trackResult);
        setPlayerScore((prev) => prev + 1);
      }
    }
    setGameResult(trackResult);
    setGameStatus(false);
  };

  return (
    <button
      onClick={handleClick}
      className="px-5 py-3 text-white w-full bg-green-600 hover:bg-green-700"
      disabled={canPlayGame != true ? true : false}
    >
      Play
    </button>
  );
};

export default PlayButton;
